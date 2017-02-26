/*
 *  @author  eidng8
 *  @license https://creativecommons.org/licenses/by-sa/4.0/
 *  @link    https://github.com/eidng8/stthb
 */

import { browser, by, element, ElementFinder } from 'protractor';

class MissionListObj {
  title: ElementFinder;

  constructor() {
    this.title = element(by.cssContainingText('ion-title', 'Missions'));
  }
}

describe('Mission List page', () => {

  beforeAll(() => {
    browser.get('/');
    element(by.linkText('Missions')).click().then(
      () => browser.driver.sleep(1000) // wait for the animation
    );
  });

  const list: MissionListObj = new MissionListObj();

  it('should have title', () => expect(list.title.isDisplayed()).toBeTruthy());
});
