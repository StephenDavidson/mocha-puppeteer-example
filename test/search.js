const { expect } = require('chai');
const puppeteer = require('puppeteer');

describe('Search', () => {
  const url = 'https://duckduckgo.com';
  let browser;
  let page;

  before(async () => {
    browser = await puppeteer.launch();
  });

  beforeEach(async () => {
    page = await browser.newPage();
    await page.goto(url);
  });

  after(async () => {
    await browser.close();
  });

  it('should display results', async() => {
      await page.type('#search_form_input_homepage', 'test');
      await page.click('#search_button_homepage');
      await page.waitForSelector('.result__a');
      const searchResult = await page.$('.result__a');
      expect(searchResult).to.exist;
  });
});

