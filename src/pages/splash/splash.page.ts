/*
 *  @author  eidng8
 *  @license https://creativecommons.org/licenses/by-sa/4.0/
 *  @link    https://github.com/eidng8/stthb
 */

import {
  Component,
  AfterViewInit,
  ChangeDetectionStrategy
} from '@angular/core';
import { DataService } from '../../shared/data.service';
import { CrewProvider } from '../../providers/crew.provider';
import { MissionsProvider } from '../../providers/missions.provider';
import { Nav } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs.page';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl:     'splash.html',
})
export class SplashPage implements AfterViewInit {
  constructor(private nav: Nav, private server: DataService,
    private crew: CrewProvider, private missions: MissionsProvider) {
  }

  ngAfterViewInit(): void {
    this.server.fetch().subscribe(() => {
      this.crew.load(this.server);
      this.missions.load(this.server);
      this.missions.loadCrew(this.crew.all);
      this.nav.setRoot(TabsPage).then(() => console.debug('at home now.'));
    });
  }
}
