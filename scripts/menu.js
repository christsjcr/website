import puppet from 'puppeteer';

function zip(arr1, arr2, f) {
    const arr3 = [];
    for (var i = 0; i < arr1.length && i < arr2.length; i++) {
        arr3.push(f(arr1[i], arr2[i]));
    }
    return arr3;
}

async function extract_options(td) {
    const lines = await td.$$eval("p", el => el.innerText).filter(s => s.length > 0);
    const trimmed = lines.map(s => s.trim());
    const not_empty = trimmed.filter(s => s.length != 0);
    return not_empty;
}

async function extract_courses(tr) {
    const tds = tr.$$("td");
    return await Promise.all(tds.map(extract_options));
}

async function extract_meals(mains_tr, desserts_tr) {
    const mains = await extract_courses(mains_tr);
    const desserts = await extract_courses(desserts_tr);

    const combined = zip(mains, desserts, (main, dessert) => { main, dessert })

    return combined;
}

async function extract_week(tbody) {
    const trs = await tbody.$$("tr");

    const lunches = await extract_meals(trs[1], trs[2]);
    const dinners = await extract_meals(trs[4], trs[5]);

    const combined = zip(lunches, dinners, (lunch, dinner) => { lunch, dinner });

    return combined;
}

async function extract_weeks(page) {
    const tbodies = (await page.$$("tbody")).slice(1);

    const weeks = await Promise.all(tbodies.map(extract_week));

    return weeks;
}

(async () => {
    const browser = await puppet.launch();
    const page = await browser.newPage();
    await page.goto("https://intranet.christs.cam.ac.uk/Shibboleth.sso/Login?target=%2Fshibboleth%2Flogin%3Fshiblogin%3D1%26destination%3D%2Fupper-hall-menus%2F");
    await page.waitForNetworkIdle();

    let username = "username";
    let password = "password";

    await page.$eval("#userid", (el, username) => el.value = username, username);
    await page.$eval("#pwd", (el, password) => el.value = password, password);

    await page.click('input[name="submit"][value="Login"]');
    await page.waitForSelector('#Week1');

    const tbodies = (await page.$$("tbody")).slice(1);

    const start = await tbodies[0].$eval("p", el => el.innerText);

    console.log(extract_weeks(page));

    console.log(start);

    await page.screenshot({ path: 'example.png' });

    await browser.close();
})();