import { WebDriver } from 'webdriverio';

/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
export default class Page {
    title: string;

    constructor() {
        this.title = 'my Page';
    }

    // locators
    get body(): WebDriver.Element {
        return $('body');
    }
    /**
    * Opens a sub page of the page
    * @param path path of the sub page (e.g. /path/to/page.html)
    */

    async open(path: string): Promise<void> {
        await browser.url(path);
    }

    async verifyTextInPage(text: string): Promise<void> {
        const pageText = await this.body.getText();
        const position = pageText.search(text);
        chai.expect(position).to.be.above(0);
    }

    /**
    * Opens a sub Login page of the page
    * @param path path of the sub page (e.g. /path/to/page.html)
    */
    openLoginPage(path: string): Promise<string | any> {
        return browser.url(`https://the-internet.herokuapp.com/${path}`)
    }
}
