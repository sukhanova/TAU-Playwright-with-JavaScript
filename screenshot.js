const { chromium } = require('playwright');

(async () => { // anonymous arrow function
	
	const browser = await chromium.launch();
	const page = await browser.newPage();
	await page.goto('https://applitools.com/');

	// take screenshot code
	await page.screenshot({ path: `screenshots/screenshot_${new Date().toDateString()}.png` });

	// take screenshot of an element
	const logo = await page.$('.logo');
	await logo.screenshot({ path: 'logo.png' });

	// take screenshot of full page (long page)
	await page.screenshot({ path: `screenshots/fullpage_${new Date().toDateString()}.png`, fullPage: true });

	// closing browser
	await browser.close();

})();