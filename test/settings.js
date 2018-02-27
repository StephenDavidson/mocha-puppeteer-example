describe('Settings', () => {
  it('should display when clicking hamburger icon', async() => {
    await page.click('.header__button--menu');
    const navMenuHeadingText = await page.waitForSelector('.nav-menu__heading span', { visible: true });
    const valueHandle = await navMenuHeadingText.getProperty('innerHTML');
    expect(await valueHandle.jsonValue()).to.eq('Settings');
  });
});