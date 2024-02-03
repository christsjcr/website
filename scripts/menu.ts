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
        .replace(/&nbsp;/gi, " ") // code for some spaces
        .replace(/&(r|l)squo;/gi, "'") // code for single quote
        .replace(/&ndash;/gi, "-") // code for dash
        .replace(/\s+/g, ' ') // get rid of extra spaces
        .toLowerCase()
        .trim()
    ).replace('Bbq', 'BBQ');
}

async function extract_options(td:HTMLElement): Promise<Option[]> {
    const options_text: string = clean_text(td.querySelectorAll("p")
        .map(p => p.innerText)
        .join(" ") //make sure multiline entries have spaces in between
        // Soup started getting it's own line so this workaround to make it more nicely formatted
        .replace(/Soup/g, "Soup:"));

    const matches = [...options_text.matchAll(meal_re)]
    const options = matches?.map( match => {
        const title = match.groups?.title || "";
        const allergies = match.groups?.allergens?.split(", ") || [];
        return { title: title.trim(), allergies }
    });
    return options;
}

// just to convert daily options into meal type and ensure each week has 7 entries
async function encode_meal(week_options: Option[][]): Promise<Meal[]> {
    for (var i = 0; i < 7 - week_options.length; i++) {
        week_options.push([]);
    }
    return week_options.map(r => ({mains: r}));
}

async function extract_days(week: HTMLElement): Promise<Day[]> {
    const [_, raw_lunches, raw_dinners] = week.querySelectorAll("tr");
    // slice 1 to skip the lunch and dinner title cells
    const lunches = await promise_map(raw_lunches.querySelectorAll("td").slice(1), extract_options);
    const dinners = await promise_map(raw_dinners.querySelectorAll("td").slice(1), extract_options);

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
    const weeks = parse(html).querySelectorAll("table");

    // get the first date from the menu to help keep track of which day to show
    const start_date_text = weeks[0].querySelector("tr :nth-child(2)")?.innerText;
    const start_date = start_date_text ? date_re.exec(start_date_text)?.groups : undefined;
    const start = start_date ? new Date(
        parseInt(start_date.year), 
        months_map[start_date.month], 
        parseInt(start_date.date)) : 
        new Date();

    const days: Day[][] = await promise_map(weeks, extract_days);
    const menu: Menu = { start, days: days.reduce((acc, v) => acc.concat(v), []) }; // flatten days array
    
    fs.writeFileSync("./src/data/menu.json", JSON.stringify(menu, null, 2));
})();