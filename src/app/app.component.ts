/*
 *  @author  eidng8
 *  @license https://creativecommons.org/licenses/by-sa/4.0/
 *  @link    https://github.com/eidng8/stthb
 */

import { Component, ViewChild, OnInit } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from 'ionic-native';
import { TabsPage } from '../pages/tabs.page';
import { CrewPage } from '../pages/crew.page';

@Component(
  {
    templateUrl: 'app.html',
  })
export class HandbookAppComponent implements OnInit {
  @ViewChild(Nav) public nav: Nav;

  public rootPage: any = TabsPage;
  public pages: Array<{title: string, component: any}>;

  public constructor(platform: Platform,
    /*private _db:DataService, private _store:Store<IAppState>,
     private _crewActions:CrewActions*/) {

    // used for an example of ngFor and navigation
    this.pages = [
      {
        component: CrewPage,
        title:     'Crew List',
      }, /* {
       component: MissionListPage,
       title:     'Mission List',
       },*/
    ];

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

  public ngOnInit(): void {
    // this._store.dispatch(this._crewActions.loadCrew());
  }

  public openPage(page: any): void {
    // reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
