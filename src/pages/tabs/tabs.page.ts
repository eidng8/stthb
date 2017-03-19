/*
 *  @author  eidng8
 *  @license https://creativecommons.org/licenses/by-sa/4.0/
 *  @link    https://github.com/eidng8/stthb
 */

import { Component, ChangeDetectionStrategy } from '@angular/core';
import { HomePage } from '../home/home.page';
import { CrewPage } from '../crew/crew.page';
import { MissionsPage } from '../missions/missions.page';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl:     'tabs.html',
})
export class TabsPage {

  home: any = HomePage;
  crew: any = CrewPage;
  missions: any = MissionsPage;
}
