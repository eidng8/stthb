import { browser, by, element } from 'protractor';
import {} from '@types/jasmine';

class HomeObj {
    public message;
    constructor() {
        this.message = element(by.id('message'));
    }
}

describe('App', () => {

    beforeEach(() => {
        browser.get('/');
    });

    const home: HomeObj = new HomeObj();

    it('should have welcome message', () => {
        expect((home.message).isDisplayed()).toBeTruthy();
    });
});
