import {NgModule} from '@angular/core';
import {IonicApp, IonicModule} from 'ionic-angular';
import {MyApp} from './app.component';
import {HomePage} from '../pages/home/home';
import {TabsPage} from '../pages/tabs/tabs';
import {DataService} from '../providers/data-service';
import {CrewProvider} from '../providers/crew';
import {MissionProvider} from '../providers/missions';
import {TitleCase} from '../pipes/titlecase';
import {Collapsible} from '../components/list/collapsible';
import {SkillItem} from '../components/skill-item/skill-item';
import {CrewItem} from '../components/crew-item/crew-item';
import {MissionItem} from '../components/mission-item/mission-item';
import {CrewList} from '../pages/crew-list/crew-list';
import {MissionList} from '../pages/mission-list/mission-list';
import {MissionCrew} from '../pages/mission-crew/mission-crew';

@NgModule(
  {
    bootstrap:       [IonicApp],
    declarations:    [
      TitleCase,
      Collapsible,
      SkillItem,
      CrewItem,
      MissionItem,
      CrewList,
      MissionList,
      MissionCrew,
      HomePage,
      TabsPage,
      MyApp,
    ],
    entryComponents: [
      CrewList,
      MissionList,
      MissionCrew,
      HomePage,
      TabsPage,
      MyApp,
    ],
    imports:         [IonicModule.forRoot(MyApp)],
    providers:       [
      DataService,
      CrewProvider,
      MissionProvider,
    ],
  })
export class AppModule
{
}
