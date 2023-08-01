import { WebDriver } from 'webdriverio';
import Page from './page.ts';

class TextInput extends Page {

  // locators
  get nameField(): WebDriver.Element {
    return $('#newButtonName');
  }
  get button(): WebDriver.Element {
    return $('#updatingButton');
  }

  // actions
  open = async (): Promise<void> => {
    await super.open('textinput');
  }

  updateButtonText = async (text:string): Promise<void> => {
    await this.nameField.setValue(text);
    await this.button.click();
  }

  getButtonText = async (): Promise<string> => {
    return await this.button().getText();
  }
}

export default new TextInput();
