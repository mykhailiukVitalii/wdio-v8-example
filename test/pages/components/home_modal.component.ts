import { WebDriver } from 'webdriverio';

export default class ModalComponent {
  element: WebDriver.Element

  constructor(element: WebDriver.Element) {
    this.element = element;
  }

  // locators
  title = async () => await this.element.$('h3').getText();
  content = async () => await this.element.$('p').getText();
}
