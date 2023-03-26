const { chromium } = require('playwright');
const url = "https://www.apronus.com/music/lessons/unit01.htm";

(async () => {
    // function code
    const browser = await chromium.launch({headless:false, slowMo: 300});
    const page = await browser.newPage();
    await page.goto(url);


    await page.click('#t1 > table > tr:nth-child(1) > td:nth-child(1) > button');

    await page.click('#t1 > table > tr:nth-child(1) > td:nth-child(3) > button');
    await page.click('#t1 > table > tr:nth-child(1) > td:nth-child(5) > button');
    await page.click('#t1 > table > tr:nth-child(1) > td:nth-child(1) > button');
    await page.click('#t1 > table > tr:nth-child(1) > td:nth-child(1) > button');
    await page.click('#t1 > table > tr:nth-child(1) > td:nth-child(3) > button');
    await page.click('#t1 > table > tr:nth-child(1) > td:nth-child(5) > button');
    await page.click('#t1 > table > tr:nth-child(1) > td:nth-child(1) > button');
    await page.click('#t1 > table > tr:nth-child(1) > td:nth-child(5) > button');
    await page.click('#t1 > table > tr:nth-child(1) > td:nth-child(6) > button');
    await page.click('#t1 > table > tr:nth-child(1) > td:nth-child(8) > button');
    await page.click('#t1 > table > tr:nth-child(1) > td:nth-child(5) > button');
    await page.click('#t1 > table > tr:nth-child(1) > td:nth-child(6) > button');
    await page.click('#t1 > table > tr:nth-child(1) > td:nth-child(8) > button');
    await page.click('#t1 > table > tr:nth-child(1) > td:nth-child(8) > button');
    await page.click('#t1 > table > tr:nth-child(1) > td:nth-child(10) > button');
    await page.click('#t1 > table > tr:nth-child(1) > td:nth-child(8) > button');
    await page.click('#t1 > table > tr:nth-child(1) > td:nth-child(6) > button');
    await page.click('#t1 > table > tr:nth-child(1) > td:nth-child(5) > button');
    await page.click('#t1 > table > tr:nth-child(1) > td:nth-child(1) > button');
    await page.click('#t1 > table > tr:nth-child(1) > td:nth-child(8) > button');
    await page.click('#t1 > table > tr:nth-child(1) > td:nth-child(10) > button');
    await page.click('#t1 > table > tr:nth-child(1) > td:nth-child(8) > button');
    await page.click('#t1 > table > tr:nth-child(1) > td:nth-child(6) > button');
    await page.click('#t1 > table > tr:nth-child(1) > td:nth-child(5) > button');
    await page.click('#t1 > table > tr:nth-child(1) > td:nth-child(1) > button');
    
    await browser.close();
})();