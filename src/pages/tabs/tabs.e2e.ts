/*
 *  @author  eidng8
 *  @license https://creativecommons.org/licenses/by-sa/4.0/
 *  @link    https://github.com/eidng8/stthb
 */
import { browser, by, element, ElementFinder } from 'protractor';

class TabsObj {
  home: ElementFinder;
  crew: ElementFinder;
  missions: ElementFinder;

  constructor() {
    this.home = element(by.linkText('Home'));
    this.crew = element(by.linkText('Crew'));
    this.missions = element(by.linkText('Missions'));
  }
}

describe('App', () => {

  beforeAll(() => {
    browser.get('/');
  });

  const tabs: TabsObj = new TabsObj();

  it('should have Home tab', () => {
    expect((tabs.home).isDisplayed()).toBeTruthy();
  });

  it('should have Crew tab', () => {
    expect((tabs.crew).isDisplayed()).toBeTruthy();
  });

  it('should have Missions tab', () => {
    expect((tabs.missions).isDisplayed()).toBeTruthy();
  });

  it('can switch to Crew tab', () => {
    tabs.crew.click().then(() => {
      expect(element(by.cssContainingText('ion-title', 'Crew')).isDisplayed())
        .toBeTruthy();
    });
  });

  it('can switch to Missions tab', () => {
    tabs.missions.click().then(() => {
      expect(
        element(by.cssContainingText('ion-title', 'Missions')).isDisplayed())
        .toBeTruthy();
    });
  });

  it('can switch to Home tab', () => {
    tabs.home.click().then(() => {
      expect(
        element(by.cssContainingText('ion-title', 'Handbook')).isDisplayed())
        .toBeTruthy();
    });
  });
});
