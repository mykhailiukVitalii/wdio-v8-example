/**
 * test with page objects
 */
import Page from '../pages/page';

describe('Excluded test', function () {
  const page = new Page();

  it('Should be excluded from the main run', async() => {
    await page.open('home');

    const pageText = await $('body').getText();
    const position = pageText.search('UI Test Automation');
    chai.expect(position).to.be.above(0);
  })
});
