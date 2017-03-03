/*
 *  @author  eidng8
 *  @license https://creativecommons.org/licenses/by-sa/4.0/
 *  @link    https://github.com/eidng8/stthb
 */

import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { IonicApp, IonicModule } from 'ionic-angular';
import { HandbookAppComponent } from './app.component';
import { CollapsibleDirective } from '../directives/collapsible.directive';
import { CrewPage } from '../pages/crew.page';
import { MissionsPage } from '../pages/missions.page';
import { HomePage } from '../pages/home.page';
import { TabsPageComponent } from '../pages/tabs.page';

@NgModule({
  bootstrap:       [IonicApp],
  declarations:    [
    CollapsibleDirective,
    CrewPage,
    MissionsPage,
    HomePage,
    TabsPageComponent,
    HandbookAppComponent,
  ],
  entryComponents: [
    CrewPage,
    MissionsPage,
    HomePage,
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
