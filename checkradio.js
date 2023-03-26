const { firefox } = require('playwright');

(async () => {
    // function code
    const browser = await firefox.launch({headless:false, slowMo: 300});
    const page = await browser.newPage();
    await page.goto('https://www.w3schools.com/howto/howto_css_custom_checkbox.asp');

    const checkboxes = await page.$$('#main div :nth-child(1) input[type="checkbox"]');
    // check the second checkbox
    await checkboxes[1].check();

    // uncheck the first checkbox
    await checkboxes[0].uncheck();

    // select the first radio button
    const radioButtons = await page.$$('#main div :nth-child(1) input[type="radio"]');
    await radioButtons[1].check();

    await browser.close();
})();