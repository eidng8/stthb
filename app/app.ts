import {Component, ViewChild} from '@angular/core';
import {ionicBootstrap, Platform, Nav} from 'ionic-angular';
import {StatusBar} from 'ionic-native';
import {CrewList} from './pages/crew-list/crew-list';
import {DataService} from './providers/data-service/data-service';
import {CrewProvider} from './providers/crew';
import {MissionProvider} from './providers/missions';
import {Home} from './pages/home/home';
import {MissionList} from './pages/mission-list/mission-list';
import {TitleCase} from './pipes/titlecase';

@Component(
  {
    templateUrl: 'build/app.html',
  })
class MyApp
{
  @ViewChild(Nav) public nav:Nav;

  public rootPage:any = Home;
  public pages:Array<{title:string, component:any}>;

  private platform:Platform;
  private db:DataService;

  // noinspection JSUnusedLocalSymbols
  public constructor(
    platform:Platform, db:DataService, crew:CrewProvider,
    missions:MissionProvider)
  {
    this.db = db;
    this.platform = platform;

    this.initializeApp();

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

  }

  public initializeApp():void
  {
    this.platform.ready()
        .then(
          () =>
          {
            // tslint:disable-next-line:no-string-literal
            if('object' == typeof (<any>window).cordova)
            {
              // okay, so the platform is ready and our
              // plugins are available. here you can do
              // any higher level native things you might
              // need.
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

ionicBootstrap(
  MyApp,
  [
    DataService, CrewProvider, MissionProvider, TitleCase,
  ]);
