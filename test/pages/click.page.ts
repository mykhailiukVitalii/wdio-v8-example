import { WebDriver } from 'webdriverio';
import Page from './page.ts';

class ClickPage extends Page {

  // locators
  get clickButton(): WebDriver.Element {
    return $('#badButton');
  }
  get ajaxContent(): WebDriver.Element {
    return $('#content > p');
  }

  // actions
  async open(): Promise<void> {
    await super.open('click');
  }

  clickBadBtn = async (): Promise<void> => {
    await this.clickButton.click();
  }

  badBtnText = async (): Promise<string> => {
    return await this.clickButton.getText();
  }
}

export default new ClickPage();
