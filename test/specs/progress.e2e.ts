/**
 * test with page objects
 */
import progressPage from '../pages/progress.page.ts';

describe('Progress page', () => {

  it('Should open the progress page in browser', async () => {
    await progressPage.open();
  });

  it('Should able to click start button', async () => {
    await progressPage.open();
    await progressPage.clickStartBtn();

    // expect(await progressPage.getProgress()).toEqual('25%', { wait: 2000 });
    await progressPage.waitForProgress(25, 2000);
  })

  it('Should wait for 75%', async () => {
    await progressPage.open();
    await progressPage.clickStartBtn();
    
    await progressPage.waitForProgress(75, 20000);
  })

});
