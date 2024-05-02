import { parse, HTMLElement } from "node-html-parser";
import fs from "fs"
import { titleCase } from "title-case";


import type { Day, Meal, Menu, Option } from "../src/components/features/types";

// regex to extract year month date specifically from the 15 Januarty 2024 format
const date_re = /\w+day (?<date>[0-9]+) (?<month>\w+) (?<year>[0-9]+)/g;
// regex to extract meal option title and allergens easily through named groups
const meal_re = /(?<title>([^()]+\s)+)\((?<allergens>[A-z, ]*)/g;

const months_map = {
    "January": 0,
    "February": 1,
    "March": 2,
    "April": 3,
    "May": 4,
    "June": 5,
    "July": 6,
    "August": 7,
    "September": 8,
    "October": 9,
    "November": 10,
    "December": 11,

};

function zip<L, R, T>(arr1: L[], arr2: R[], f: (l: L, r: R, i: number) => T): T[] {
    const arr3: T[] = [];
    for (var i = 0; i < arr1.length && i < arr2.length; i++) {
        arr3.push(f(arr1[i], arr2[i], i));
    }
    return arr3;
}

async function promise_map<T, U>(arr: T[], f: (x: T) => Promise<U>): Promise<U[]> {
    const result: U[] = [];
    for (let i = 0; i < arr.length; i++) {
        result.push(await f(arr[i]));
    }
    return result;
}

function clean_text(s: string): string {
    return titleCase(
        s.replace(' ', ' ')
        // note: I wrote this quickly and couldn't bother to find a better way to do this, pls fix lol
        .replace(/&(nbsp|#160);/gi, " ") // code for some spaces
        .replace(/&((r|l)squo|#821(6|7));/gi, "'") // code for single quote
        .replace(/&(ndash|#8211);/gi, "-") // code for dash
        .replace(/&Amp;/gi, "&")
        .replace(/&#232;/g, "é")
        .replace(/\s+/g, ' ') // get rid of extra spaces
        .toLowerCase()
        .trim()
    ).replace('Bbq', 'BBQ');
}

async function extract_options(td:string): Promise<Option[]> {
    // Soup started getting it's own line so this workaround to make it more nicely formatted
    const options_text: string = td.replace(/Soup/g, "Soup:");

    const matches = [...options_text.matchAll(meal_re)]
    const options = matches?.map( match => {
        const title = match.groups?.title || "";
        const allergies = match.groups?.allergens?.split(", ") || [];
        return { title: title.trim(), allergies: allergies.filter(a => a != "Tbc") }
    });
    return options;
}

// just to convert daily options into meal type and ensure each week has 7 entries
async function encode_meal(week_options: Option[][]): Promise<Meal[]> {
    const n = week_options.length;
    for (let i = 0; i < 7 - n; i++) {
        week_options.push([]);
    }
    return week_options.map(r => ({mains: r}));
}

async function extract_days(week: HTMLElement): Promise<Day[]> 
{
    const meals = week.querySelectorAll("p").map(m => clean_text(m.innerText)).filter(m => m && m != " ")
    const raw_lunches = meals.slice(3, 8);
    const raw_dinners = meals.slice(25);

    // slice 1 to skip the lunch and dinner title cells
    const lunches = await promise_map(raw_lunches, extract_options);
    const dinners = await promise_map(raw_dinners, extract_options);
    const combined: Day[] = zip(
        await encode_meal(lunches), 
        await encode_meal(dinners), 
        (lunch, dinner, i) => (i == 5 || i == 6) ? 
            // don't include lunch for weekends, UI will just show default brunch description
            { weekend: true, dinner } : 
            { weekend: false, lunch, dinner });
    return combined;
}

(async () => {
    const html = fs.readFileSync("./misc/menu.html", { encoding: "utf8" });
    const weeks = parse(html).querySelectorAll("body > div");

    const days: Day[][] = await promise_map(weeks, extract_days);
    await promise_map(weeks, extract_days);
    const menu: Menu = { start: new Date(), days: days.reduce((acc, v) => acc.concat(v), []) }; // flatten days array
    
    fs.writeFileSync("./src/data/menu.json", JSON.stringify(menu, null, 2));
})();