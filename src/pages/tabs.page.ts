/*
 *  @author  eidng8
 *  @license https://creativecommons.org/licenses/by-sa/4.0/
 *  @link    https://github.com/eidng8/stthb
 */

import { Component } from '@angular/core';
import { HomePage } from './home.page';
import { CrewPage } from './crew.page';
import { MissionsPage } from './missions.page';

@Component({
  templateUrl: 'tabs.html',
})
export class TabsPage {

  home: any = HomePage;
  crew: any = CrewPage;
  missions: any = MissionsPage;

  constructor() {
  }
}
