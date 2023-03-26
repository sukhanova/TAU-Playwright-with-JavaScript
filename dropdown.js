const { chromium } = require('playwright');
const url = "http://the-internet.herokuapp.com/dropdown";

(async () => {
    // function code
    const browser = await chromium.launch({headless:false, slowMo: 500});
    const page = await browser.newPage();
    await page.goto(url);

    // code to type select option from dropdown list
    const dropdown = await page.$('#dropdown');
    // value
    await dropdown.selectOption({value: '1'});
    // label
    await dropdown.selectOption({label: 'Option 2'});
    // index
    await dropdown.selectOption({index: 1});

    // values inside this select
    const availableOptions = await dropdown.$$('option');
    for (let i = 0; i < availableOptions.length; i++) {
        console.log(await availableOptions[i].innerText());
    }
    
    await browser.close();
})();