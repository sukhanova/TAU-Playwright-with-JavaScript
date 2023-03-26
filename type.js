const { chromium } = require('playwright');
const url = "http://the-internet.herokuapp.com/forgot_password";

(async () => {
    // function code
    const browser = await chromium.launch({headless:false, slowMo: 100});
    const page = await browser.newPage();
    await page.goto(url);

    // code to type in email textbox
    const email = await page.$('#email');
    await email.type('test@email.com'), {delay: 50};
    const retreivePasswordButton = await page.$('#form_submit');
    await retreivePasswordButton.click(), {delay: 100};

    await browser.close();
})();