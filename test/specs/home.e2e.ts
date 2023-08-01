/**
 * test with page objects
 */
import homePage from '../pages/home.page.ts';

describe('Home Page Suite', () => {
  it('should have Load Delay section', async () => {
    // Using component to capture repeating html part
    await homePage.open();
    await homePage.verifyTextInPage('UI Test Automation');

    expect(await homePage.pageModals[3].title())
      .toEqual('Load Delay');
    expect(await homePage.pageModals[3].content())
      .toEqual('Ensure that a test is capable of waiting for a page to load');
  });
});
