import { WebDriver } from 'webdriverio';
import Page from './page.ts';

class ProgressPage extends Page {

  // locators
  get startButton(): WebDriver.Element {
    return $('#startButton');
  }
  get stopButton(): WebDriver.Element {
    return $('#stopButton');
  }
  get progressBar(): WebDriver.Element {
    return $('#progressBar');
  }
  // actions
  async open(): Promise<void> {
    await super.open('progressbar');
  }

  getProgress = async (): Promise<string> => {
    return await this.progressBar.getText();
  }

  clickStartBtn = async (): Promise<void>  => {
    await this.startButton.click();
  }

  waitForProgress = async (progress: number, timeout: number): Promise<void>  => {
    return await browser.waitUntil(
      async () => await this.getProgress() === `${progress}%`,
      { 
        timeout: timeout || 10000, 
        timeoutMsg: `Expected ${progress} but got ${await this.getProgress()}`
      }
    );
  }
}

export default new ProgressPage();
