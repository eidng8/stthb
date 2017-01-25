// tslint:disable:trailing-comma
import {NgModule} from '@angular/core';
import {HttpModule} from '@angular/http';
import {IonicApp, IonicModule} from 'ionic-angular';
import {HandbookApp} from './app.component';
import {
  HomePage,
  TabsPage,
  CrewListPage,
} from '../pages';

@NgModule(
  {
    bootstrap:       [IonicApp],
    declarations:    [
      CrewListPage,
      HomePage,
      TabsPage,
      HandbookApp,
    ],
    entryComponents: [
      CrewListPage,
      HomePage,
      TabsPage,
      HandbookApp,
    ],
    imports:         [
      HttpModule,
      IonicModule.forRoot(HandbookApp),
      // StoreModule.provideStore(reducer),
      // EffectsModule.run(CrewEffects),
    ],
    providers:       [
    ],
  })
export class AppModule
{
}
