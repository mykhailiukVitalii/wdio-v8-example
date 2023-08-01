/**
 * test with page objects
 */
import ajaxPage from '../pages/ajax.page.ts';

describe('Ajax Page Suite', () => {
  it('should retrieve Ajax response', async () => {
    await ajaxPage.open();
    await ajaxPage.clickAjaxBtn();

    expect(await ajaxPage.getContent()).toHaveText(
        'Data loaded with AJAX get request.', { wait: 20000 });
  });
});
