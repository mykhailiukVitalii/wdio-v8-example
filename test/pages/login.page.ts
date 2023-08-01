import { WebDriver } from 'webdriverio';
import Page from './page.ts';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */
    get inputUsername(): WebDriver.Element {
        return $('#username');
    }

    get inputPassword(): WebDriver.Element {
        return $('#password');
    }

    get btnSubmit(): WebDriver.Element {
        return $('button[type="submit"]');
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async login(username:string, password:string): Promise<void> {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    openLogin(): Promise<void> {
        return super.openLoginPage('login');
    }
}

export default new LoginPage();
