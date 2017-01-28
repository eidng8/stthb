/*
 *  @author  eidng8
 *  @license https://creativecommons.org/licenses/by-sa/4.0/
 *  @link    https://github.com/eidng8/stthb
 */

// tslint:disable:trailing-comma
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { IonicApp, IonicModule } from 'ionic-angular';
import { HandbookAppComponent } from './app.component';
import {
  CrewListPage,
  HomePageComponent,
  MissionListPage,
  TabsPageComponent
} from '../pages';

@NgModule(
  {
    bootstrap:       [IonicApp],
    declarations:    [
      CrewListPage,
      MissionListPage,
      HomePageComponent,
      TabsPageComponent,
      HandbookAppComponent,
    ],
    entryComponents: [
      CrewListPage,
      MissionListPage,
      HomePageComponent,
      TabsPageComponent,
      HandbookAppComponent,
    ],
    imports:         [
      HttpModule,
      IonicModule.forRoot(HandbookAppComponent),
    ],
    providers:       [],
  })
export class AppModule {
}
