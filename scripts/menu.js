import puppet from "puppeteer";
import fs from "fs";
import { fileURLToPath } from "url";
import { dirname } from "path";
import { titleCase } from "title-case";

function zip(arr1, arr2, f) {
    const arr3 = [];
    for (var i = 0; i < arr1.length && i < arr2.length; i++) {
        arr3.push(f(arr1[i], arr2[i]));
    }
    return arr3;
}

function clean_text(s) {
    return titleCase(
        s.replace(' ', ' ')
            .replace(/\s+/g, ' ')
            .toLowerCase()
            .trim()
    ).replace('Bbq', 'BBQ');
}

function extract_allergies(s) {
    const regex = /^([^()]+)\s*\(([^()]+)\)$/;
    const match = regex.exec(s);
    if (match) {
        return { title: match[1].trim(), allergies: match[2].split("-").map(a => a.trim()) };
    } else {
        if (s.includes("(") || s.includes(")")) {
            console.log("Failed to find allergies for: " + s)
        }
        return { title: s }
    }
}

async function extract_options(td) {
    const innerText = await (await td.getProperty("innerText")).jsonValue();
    const lines = innerText.split("\n");
    const cleaned = lines.map(clean_text);
    const not_empty = cleaned.filter(s => s.length != 0);
    return not_empty.map(extract_allergies);
}

async function extract_row(tr) {
    const raw_tds = await tr.$$("td");
    const tds = raw_tds.length == 7 ? raw_tds : raw_tds.slice(1);
    const row = await Promise.all(tds.map(extract_options));
    for (var i = 0; i < 7 - row.length; i++) {
        row.push([]);
    }
    return row;
}

async function extract_meals(mains_tr, desserts_tr) {
    const mains = await extract_row(mains_tr);
    const desserts = await extract_row(desserts_tr);

    const combined = zip(mains, desserts, (mains, desserts) => ({ mains, dessert: desserts[0] }))

    return combined;
}

async function extract_week(tbody) {
    const trs = await tbody.$$("tr");

    const lunches = await extract_meals(trs[1], trs[2]);
    const dinners = await extract_meals(trs[4], trs[5]);

    const combined = zip(lunches, dinners, (lunch, dinner) => ({ weekend: false, lunch, dinner }));

    combined[5].weekend = true;
    delete combined[5].lunch;
    combined[6].weekend = true;
    delete combined[6].lunch;

    return combined;
}

async function extract_days(page) {
    const tbodies = (await page.$$("tbody")).slice(1);

    const weeks = await Promise.all(tbodies.map(extract_week));

    return weeks.reduce((acc, val) => acc.concat(val), []);
}

(async () => {
    const browser = await puppet.launch({ headless: false, userDataDir: dirname(fileURLToPath(import.meta.url)) + '/puppeteer-data' });
    const page = await browser.newPage();
    await page.goto("https://intranet.christs.cam.ac.uk/Shibboleth.sso/Login?target=%2Fshibboleth%2Flogin%3Fshiblogin%3D1%26destination%3D%2Fupper-hall-menus%2F");

    await page.waitForFunction('document.documentElement.innerHTML.includes("Upper Hall Menus")', { timeout: 5 * 60000 });

    const tbodies = (await page.$$("tbody")).slice(1);

    const start_date = (await tbodies[0].$eval("p", el => el.innerText))
        .replace(/[^0-9.]/g, " ")
        .trim()
        .split(" ")
        .map(x => parseInt(x));

    // constructor counts months from 0
    const start = new Date(2000 + start_date[2], start_date[1] - 1, start_date[0]);

    const days = await extract_days(page);

    await browser.close();

    const menu = {
        start,
        days
    };

    fs.writeFileSync("./src/data/menu.json", JSON.stringify(menu, null, 2));
})();