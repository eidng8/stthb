// tslint:disable:trailing-comma
import {NgModule} from '@angular/core';
import {HttpModule} from '@angular/http';
import {EffectsModule} from '@ngrx/effects';
import {StoreModule} from '@ngrx/store';
import {IonicApp, IonicModule} from 'ionic-angular';
import {CrewService} from '../services';
import {CrewActions, reducer, CrewEffects, FilterActions} from '../ngrx';
import {HandbookApp} from './app.component';
import {
  HomePage,
  TabsPage,
  CrewListPage,
  MissionCrewPage,
  MissionListPage
} from '../pages';
import {DataService} from '../providers/data-service';
import {CrewProvider} from '../providers/crew';
import {MissionProvider} from '../providers/missions';
import {TitleCasePipe} from '../pipes';
import {
  CollapsibleDirective,
  SkillItemComponent,
  CrewItemComponent,
  MissionItemComponent
} from '../components';
import {FilterPage} from '../pages/filter/filter.page';
// tslint:enable:trailing-comma

@NgModule(
  {
    bootstrap:       [IonicApp],
    declarations:    [
      TitleCasePipe,
      CollapsibleDirective,
      SkillItemComponent,
      CrewItemComponent,
      MissionItemComponent,
      FilterPage,
      CrewListPage,
      MissionCrewPage,
      MissionListPage,
      HomePage,
      TabsPage,
      HandbookApp,
    ],
    entryComponents: [
      FilterPage,
      CrewListPage,
      MissionCrewPage,
      MissionListPage,
      HomePage,
      TabsPage,
      HandbookApp,
    ],
    imports:         [
      HttpModule,
      IonicModule.forRoot(HandbookApp),
      StoreModule.provideStore(reducer),
      EffectsModule.run(CrewEffects),
    ],
    providers:       [
      CrewActions,
      FilterActions,
      DataService,
      CrewProvider,
      MissionProvider,
      CrewService,
    ],
  })
export class AppModule
{
}
