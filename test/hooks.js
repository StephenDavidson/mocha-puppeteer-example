const { expect } = require('chai');
const puppeteer = require('puppeteer');

const url = 'https://duckduckgo.com';
global.expect = expect;

before(async () => {
  global.browser = await puppeteer.launch();
});

beforeEach(async () => {
  global.page = await browser.newPage();
  await page.goto(url);
});

afterEach(async () => {
  await page.close();
});

after(async () => {
  await browser.close();
});