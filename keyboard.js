const { chromium } = require('playwright');

(async () => {
    // function code
    const browser = await chromium.launch({headless:false, slowMo: 100});
    const page = await browser.newPage();
    await page.goto('https://the-internet.herokuapp.com/key_presses');

    await page.click('#target');
    const textToType = 'Lorem ipsum dolor sit amet. 33 totam minima est quisquam officiis qui quaerat quidem aut numquam recusandae.';
    const textToDelete = ' 33 totam minima est quisquam officiis qui quaerat quidem aut numquam recusandae.';
    await page.keyboard.type(textToType);

    // to delete text
    await page.keyboard.down('Shift');
    for(let i = 0; i < textToDelete.length; i++){
        await page.keyboard.press('ArrowLeft');
    }

    await page.keyboard.up('Shift');
    await page.keyboard.press('Backspace');
    await page.keyboard.type(' 123Test');

   

    await browser.close();
})();