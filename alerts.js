const { webkit } = require('playwright');

(async () => {
    // function code
    const browser = await webkit.launch({headless:false, slowMo: 500});
    const page = await browser.newPage();
    await page.goto('https://demoqa.com/alerts');

    page.once('dialog', async dialog =>{
        console.log(dialog.message());
        await dialog.accept();
    })
    await page.click('#confirmButton');


    page.once('dialog', async dialog =>{
            console.log(dialog.message());
            await dialog.accept('this is custom text');
        })
    await page.click('#promtButton');
    

    await browser.close();
})();