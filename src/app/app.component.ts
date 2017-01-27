import {Component, ViewChild, OnInit} from '@angular/core';
import {Platform, Nav} from 'ionic-angular';
import {StatusBar} from 'ionic-native';
import {TabsPage, CrewListPage} from '../pages';

declare const cordova: any;

@Component(
  {
    templateUrl: 'app.html',
  })
export class HandbookApp implements OnInit {
  @ViewChild(Nav) public nav: Nav;

  public rootPage: any = TabsPage;
  public pages: Array<{title: string, component: any}>;

  private platform: Platform;

  public constructor(
    platform: Platform,
    /*private _db:DataService, private _store:Store<IAppState>,
     private _crewActions:CrewActions*/) {
    this.platform = platform;

    // used for an example of ngFor and navigation
    this.pages = [
      {
        component: CrewListPage,
        title:     'Crew List',
      }, /* {
       component: MissionListPage,
       title:     'Mission List',
       },*/
    ];

    platform.ready().then(
      () => {
        if('undefined' != typeof cordova) {
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
