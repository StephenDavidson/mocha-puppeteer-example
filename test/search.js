describe('Search', () => {
  it('should return result "Apple"', async() => {
      await page.type('#search_form_input_homepage', 'Apple Wiki');
      await page.click('#search_button_homepage');
      const searchResult = await page.waitForSelector('.result__a');
      const valueHandle = await searchResult.getProperty('innerHTML');
      expect(await valueHandle.jsonValue()).to.include('Apple');
  });

  it('page title should contain "DuckDuckGo"', async() => {
    expect(await page.title()).to.include('DuckDuckGo');
  });
});

