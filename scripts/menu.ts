import puppet from "puppeteer";
import fs from "fs";
import { fileURLToPath } from "url";
import { dirname } from "path";
import { titleCase } from "title-case";

import type { Day, Meal, Menu, Option } from "../src/components/features/types";

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
            .replace(/\s+/g, ' ')
            .toLowerCase()
            .trim()
    ).replace('Bbq', 'BBQ');
}

function extract_allergies(s: string): Option {
    const regex = /^([^()]+)\s*\(([^()]+)\)$/;
    const match = regex.exec(s);
    if (match) {
        return { title: match[1].trim(), allergies: match[2].split("-").map(a => a.trim()) };
    } else {
        if (s.includes("(") || s.includes(")")) {
            console.log("Failed to find allergies for: " + s)
        }
        return { title: s, allergies: [] }
    }
}

async function extract_options(td: puppet.ElementHandle): Promise<Option[]> {
    const innerText: string = await (await td.getProperty("innerText")).jsonValue();
    const lines = innerText.split("\n");
    const cleaned = lines.map(clean_text);
    const not_empty = cleaned.filter(s => s.length != 0);
    const joined: string[] = [];
    not_empty.forEach(x => (joined.length == 0 || !x.startsWith("(")) ? joined.push(x) : joined[joined.length - 1] += " " + x);
    return joined.map(extract_allergies);
}

async function extract_row(tr: puppet.ElementHandle): Promise<Option[][]> {
    const raw_tds = await tr.$$("td");
    const tds = raw_tds.length == 7 ? raw_tds : raw_tds.slice(1);
    const row = await promise_map(tds, extract_options);
    for (var i = 0; i < 7 - row.length; i++) {
        row.push([]);
    }
    return row;
}

async function extract_next_meal(rows: puppet.ElementHandle[], start: number): Promise<[Meal[], number]> {
    console.log(start, rows.length);
    for (let i = start; i < rows.length; i++) {
        const row = await extract_row(rows[i]);
        if (row[0]?.length > 0) return [row.map(r => ({mains: r})), i + 1];
    }
    throw new Error("Couldn't find next meal!");
}

async function extract_week(tbody: puppet.ElementHandle): Promise<Day[]> {
    const trs = await tbody.$$("tr");
    if (trs.length <= 1) return [];

    const [lunches, next] = await extract_next_meal(trs, 1);
    console.log("Lunch: ", JSON.stringify(lunches, null, 4));
    const [dinners, _] = await extract_next_meal(trs, next);
    console.log("Dinners: ", JSON.stringify(dinners, null, 4));

    const combined: Day[] = zip(lunches, dinners, (lunch, dinner, i) => (i == 5 || i == 6) ? { weekend: true, dinner } : { weekend: false, lunch, dinner });
    
    return combined;
}

async function extract_days(page: puppet.Page): Promise<Day[]> {
    const tbodies = (await page.$$("tbody")).slice(1);

    const weeks = await promise_map(tbodies, extract_week);

    return weeks.reduce((acc, val) => acc.concat(val), []);
}

(async () => {
    const browser = await puppet.launch({ headless: false, userDataDir: dirname(fileURLToPath(import.meta.url)) + '/puppeteer-data' });
    let start: Date = new Date();
    let days: Day[] = [];
    try {
        const page = await browser.newPage();
        await page.goto("https://intranet.christs.cam.ac.uk/Shibboleth.sso/Login?target=%2Fshibboleth%2Flogin%3Fshiblogin%3D1%26destination%3D%2Fupper-hall-menus%2F");
    
        await page.waitForFunction('document.documentElement.innerHTML.includes("Upper Hall Menus")', { timeout: 5 * 60000 });
    
        const tbodies = (await page.$$("tbody")).slice(1);
    
        const start_date = (await tbodies[0].$eval("p", (el: any) => el.innerText as string))
            .replace(/[^0-9.]/g, " ")
            .trim()
            .split(" ")
            .map((x) => parseInt(x));
    
        // constructor counts months from 0
        start = new Date(2000 + start_date[2], start_date[1] - 1, start_date[0]);
    
        days = await extract_days(page);
    } finally {
        await browser.close();
    }

    const menu: Menu = {
        start,
        days
    };

    fs.writeFileSync("./src/data/menu.json", JSON.stringify(menu, null, 2));
})();