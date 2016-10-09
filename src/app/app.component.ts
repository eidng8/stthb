import {Store} from '@ngrx/store';
import {Component, ViewChild, OnInit} from '@angular/core';
import {Platform, Nav} from 'ionic-angular';
import {StatusBar} from 'ionic-native';
import {CrewActions, IAppState} from '../ngrx';
import {TabsPage, MissionListPage, CrewListPage} from '../pages';
import {DataService} from '../providers/data-service';


declare var cordova:any;

@Component(
  {
    templateUrl: 'app.component.html',
  })
export class HandbookApp implements OnInit
{
  @ViewChild(Nav) public nav:Nav;

  public rootPage:any = TabsPage;
  public pages:Array<{title:string, component:any}>;

  private platform:Platform;
  private db:DataService;

  public constructor(
    platform:Platform, db:DataService, private _store:Store<IAppState>,
    private _crewActions:CrewActions)
  {
    this.platform = platform;
    this.db = db;

    // used for an example of ngFor and navigation
    this.pages = [
      {
        component: CrewListPage,
        title:     'Crew List',
      }, {
        component: MissionListPage,
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

  public ngOnInit():void
  {
    this._store.dispatch(this._crewActions.loadCrew());
  }

  public openPage(page:any):void
  {
    // reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
