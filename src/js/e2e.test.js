import puppetteer from 'puppeteer';
// import validateCard from './validatecard.js';

jest.setTimeout(30000); // default puppeteer timeout

describe('Popover form', () => {
  let browser = null;
  let page = null;
  let server = null;
  const baseUrl = 'http://localhost:9000'; 

  beforeAll(async () => {
    browser = await puppetteer.launch({
      headless: process.env.CI, // show gui
      slowMo: 250,
      devtools: true, // show devTools
    });
    page = await browser.newPage();
  });

  afterAll(async () => {
    await browser.close();
  });

  test("page rendering", async () => {
    await page.goto("http://localhost:9000");

    await page.waitForSelector("body");
  });

  test("active icon tooltip", async () => {
    const button = await page.$('.btn');

    await button.click();

    await page.waitForSelector('.tooltip');
    await page.waitForSelector('.active');
  });

  test("noactive icon tooltip", async () => {
    const button = await page.$('.btn');
    
    await button.click();

    await page.waitForSelector('.noactive');
  });

});
