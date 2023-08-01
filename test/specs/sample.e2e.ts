/**
 * test with page objects
 */
import Page from '../pages/page.ts';

describe('Basic tests', function () {
  const page = new Page();

  it('Should open the page in browser', async () => {
    await page.open('home');
  });

  it('Should able open the home page and see test', async() => {
    await page.open('home');

    const pageText = await $('body').getText();
    const position = pageText.search('UI Test Automation');
    chai.expect(position).to.be.above(0);
  })
});
