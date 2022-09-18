const puppeteer = require('puppeteer')
const ci = Boolean(process.env.CI || false);
jest.setTimeout(50000)

let opts = [
    '--ignore-certificate-errors',
    '--no-sandbox',
    '--disable-setuid-sandbox',
    '--disable-accelerated-2d-canvas',
    '--disable-gpu']

if (!ci) opts.push('--window-size=640,480')

describe('e2e with jest-puppeteer', () => {
    let browser;
    beforeEach(async () => {
        browser = await puppeteer.launch({
            headless: ci, 
            slowMo: ci?0:80,
            args: opts
        });
    })

    afterEach(async () => {
        await browser.close()
    })

    it('get button click', async() => {
        const page = await browser.newPage();
        await page.goto('http://localhost:3000/webpack-react-js-mpa-example')
        const btn = await page.$('button');
        await btn.click();
        const selector = '[data-testid=numlist]'
        await page.waitForSelector(selector)
        const innerText = await page.evaluate((sel) => {
            return document.querySelector(sel).innerText;
        }, selector)
        expect(innerText).not.toBe('');
    })

    it('get paragraph without click', async() => {
        const page = await browser.newPage();
        await page.goto('http://localhost:3000/webpack-react-js-mpa-example')
        const selector = '[data-testid=numlist]'
        await page.waitForSelector(selector)
        const innerText = await page.evaluate((sel) => {
            return document.querySelector(sel).innerText;
        }, selector)
        expect(innerText).toBe('');
    })
})