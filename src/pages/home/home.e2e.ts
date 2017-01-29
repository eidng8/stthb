/*
 *  @author  eidng8
 *  @license https://creativecommons.org/licenses/by-sa/4.0/
 *  @link    https://github.com/eidng8/stthb
 */
import { browser, by, element, ElementFinder } from 'protractor';

class HomeObj {
  public message: ElementFinder;

  constructor() {
    this.message = element(by.id('message'));
  }
}

describe('Home', () => {

  beforeEach(() => {
    browser.get('/');
  });

  const home: HomeObj = new HomeObj();

  it('should have welcome message', () => {
    expect((home.message).isDisplayed()).toBeTruthy();
  });
});
