import {Component, ViewChild} from '@angular/core';
import {Platform, Nav} from 'ionic-angular';
import {StatusBar} from 'ionic-native';
import {TabsPage} from '../pages/tabs/tabs';
import {DataService} from '../providers/data-service';
import {MissionList} from '../../.tmp/pages/mission-list/mission-list';
import {CrewList} from '../pages/crew-list/crew-list';


@Component(
  {
    templateUrl: 'app.component.html',
  })
export class Handbook
{
  @ViewChild(Nav) public nav:Nav;

  public rootPage:any = TabsPage;
  public pages:Array<{title:string, component:any}>;

  private platform:Platform;
  private db:DataService;

  public constructor(platform:Platform, db:DataService)
  {
    this.platform = platform;
    this.db = db;

    // used for an example of ngFor and navigation
    this.pages = [
      {
        component: CrewList,
        title:     'Crew List',
      }, {
        component: MissionList,
        title:     'Mission List',
      },
    ];

    platform.ready().then(
      () =>
      {
        if('undefined' != typeof cordova)
        {
          // okay, so the platform is ready and our plugins
          // are available. here you can do any higher level
          // native things you might need.
          StatusBar.styleDefault();
        }
      });
  }

  public openPage(page:any):void
  {
    // reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
