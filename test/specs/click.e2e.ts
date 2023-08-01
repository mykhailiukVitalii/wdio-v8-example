/**
 * test with page objects
 */
import clickPage from '../pages/click.page.ts';

describe('Click page', () => {
  it('Should able to click the button', async () => {
    await clickPage.open();
    await clickPage.clickBadBtn();
    
    expect(await clickPage.badBtnText()).toEqual('Button That Ignores DOM Click Event', { wait: 2000 });
  });
});