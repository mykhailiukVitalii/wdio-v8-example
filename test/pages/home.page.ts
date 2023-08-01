import { WebDriver } from 'webdriverio';

import Page from './page.ts';
import ModalComponent from './components/home_modal.component.ts';

class HomePage extends Page {
  get pageModals() {
    return $$('#overview .col-sm').map((modal: WebDriver.Element) => new ModalComponent(modal));
  }

  // actions
  async open(): Promise<void> {
    await super.open('home');
  };
}

export default new HomePage();
