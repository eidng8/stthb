/*
 *  @author  eidng8
 *  @license https://creativecommons.org/licenses/by-sa/4.0/
 *  @link    https://github.com/eidng8/stthb
 */

import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from 'ionic-native';
import { SplashPage } from '../pages/splash/splash.page';

@Component(
  {
    templateUrl: 'app.html',
  })
export class HandbookAppComponent {

  @ViewChild(Nav) public nav: Nav;

  rootPage: any = SplashPage;
  pages: Array<{title: string, component: any}>;

  public constructor(platform: Platform) {
    platform.ready().then(
      () => {
        if(platform.is('cordova')) {
          // okay, so the platform is ready and our plugins
          // are available. here you can do any higher level
          // native things you might need.
          StatusBar.styleDefault();
        }
      });
  }

  openPage(page: any): void {
    // reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component).then(() => console.debug('set root done'));
  }
}
