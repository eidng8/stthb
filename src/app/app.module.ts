/*
 *  @author  eidng8
 *  @license https://creativecommons.org/licenses/by-sa/4.0/
 *  @link    https://github.com/eidng8/stthb
 */

import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { StoreModule } from '@ngrx/store';
import { IonicApp, IonicModule } from 'ionic-angular';
import { HandbookAppComponent } from './app.component';
import { reducers } from '../ngrx/state.service';
import { CollapsibleDirective } from '../directives/collapsible.directive';
import { CrewPage } from '../pages/crew.page';
import { MissionsPage } from '../pages/missions.page';
import { HomePage } from '../pages/home.page';
import { TabsPage } from '../pages/tabs.page';
import { SkillComponent } from '../components/skill.component';
import { MemberBriefComponent } from '../components/member-brief.component';
import { MissionBriefComponent } from '../components/mission-brief.component';
import { CrewProvider } from '../providers/crew.provider';
import { MissionsProvider } from '../providers/missions.provider';
import { DataProvider } from '../providers/data.provider';
import { DataService } from '../shared/data.service';
import { Factory } from '../shared/factory';

@NgModule({
  bootstrap:       [IonicApp],
  declarations:    [
    HandbookAppComponent,
    CollapsibleDirective,
    SkillComponent,
    MemberBriefComponent,
    MissionBriefComponent,
    TabsPage,
    CrewPage,
    MissionsPage,
    HomePage,
  ],
  entryComponents: [
    HandbookAppComponent,
    TabsPage,
    CrewPage,
    MissionsPage,
    HomePage,
  ],
  imports:         [
    HttpModule,
    StoreModule.provideStore(reducers),
    IonicModule.forRoot(HandbookAppComponent, {hoverCSS: false}),
  ],
  providers:       [
    DataService,
    Factory,
    CrewProvider,
    MissionsProvider,
    DataProvider,
  ],
})
export class AppModule {
}
