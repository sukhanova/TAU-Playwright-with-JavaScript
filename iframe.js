const { webkit } = require('playwright');

(async () => {
    // function code
    const browser = await webkit.launch({headless:false, slowMo: 300});
    const page = await browser.newPage();
    await page.goto('https://demoqa.com/frames');

    // logic to handle iframes
    const frame1 = await page.frame({url: /\/sample/});
    const header1 = await frame1.$('h1');
    console.log(await header1.innerText());

    await browser.close();
})();