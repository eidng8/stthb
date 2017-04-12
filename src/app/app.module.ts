/*
 *  @author  eidng8
 *  @license https://creativecommons.org/licenses/by-sa/4.0/
 *  @link    https://github.com/eidng8/stthb
 */

import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MemberBriefComponent } from '../components/member-brief/member-brief.component';
import { MissionBriefComponent } from '../components/mission-brief/mission-brief.component';
import { SkillComponent } from '../components/skill/skill.component';
import { CollapsibleDirective } from '../directives/collapsible.directive';
import { CrewMissionsPage } from '../pages/crew-missions/crew-missions.page';
import { CrewPage } from '../pages/crew/crew.page';
import { HomePage } from '../pages/home/home.page';
import { MissionsPage } from '../pages/missions/missions.page';
import { SplashPage } from '../pages/splash/splash.page';
import { TabsPage } from '../pages/tabs/tabs.page';
import { CrewProvider } from '../providers/crew.provider';
import { MissionsProvider } from '../providers/missions.provider';
import { DataService } from '../shared/data.service';
import { HandbookAppComponent } from './app.component';

@NgModule({
  bootstrap:          [IonicApp], declarations: [
    HandbookAppComponent,
    SplashPage,
    CollapsibleDirective,
    SkillComponent,
    MemberBriefComponent,
    MissionBriefComponent,
    TabsPage,
    HomePage,
    CrewPage,
    MissionsPage,
    CrewMissionsPage,
  ], entryComponents: [
    HandbookAppComponent,
    SplashPage,
    TabsPage,
    HomePage,
    CrewPage,
    MissionsPage,
    CrewMissionsPage,
  ], imports:         [
    HttpModule, /*StoreModule.provideStore(reducers),*/
    IonicModule.forRoot(HandbookAppComponent, {hoverCSS: false}),
  ], providers:       [DataService, CrewProvider, MissionsProvider],
})
export class AppModule {
}
