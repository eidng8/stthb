/*
 *  @author  eidng8
 *  @license https://creativecommons.org/licenses/by-sa/4.0/
 *  @link    https://github.com/eidng8/stthb
 */

import { browser, by, element, ElementFinder } from 'protractor';

class CrewListObj {
  title: ElementFinder;

  constructor() {
    this.title = element(by.cssContainingText('ion-title', 'Crew'));
  }
}

describe('Crew List page', () => {

  beforeAll(() => {
    browser.get('/');
    element(by.linkText('Crew')).click();
  });

  const list: CrewListObj = new CrewListObj();

  it('should have title', () => expect(list.title.isDisplayed()).toBeTruthy());
});
