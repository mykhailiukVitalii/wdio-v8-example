import { WebDriver } from 'webdriverio';
import Page from './page.ts';

class AjaxPage extends Page {

  // locators
  get ajaxButton(): WebDriver.Element {
    return $('#ajaxButton');
  }
  get ajaxContent(): WebDriver.Element {
    return $('#content > p');
  }

  // actions
  async open(): Promise<void> {
    await super.open('ajax');
  }

  clickAjaxBtn = async (): Promise<void> => {
    await this.ajaxButton.click();
  }

  getContent = async (): Promise<string> => {
    await this.ajaxContent.waitForExist({ timeout: 20000 });
    
    return await this.ajaxContent.getText();
  }
}

export default new AjaxPage();
