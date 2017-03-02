/*
 *  @author  eidng8
 *  @license https://creativecommons.org/licenses/by-sa/4.0/
 *  @link    https://github.com/eidng8/stthb
 */

import { Component } from '@angular/core';
import { HomePageComponent } from './home.page';
import { CrewPageComponent } from './crew.page';
import { MissionsPageComponent } from './missions.page';

@Component({
  templateUrl: 'tabs.html',
})
export class TabsPageComponent {

  public home: any;
  public crew: any;
  public missions: any;

  public constructor() {
    // this tells the tabs component which Pages
    // should be each tab's root Page
    this.home = HomePageComponent;
    this.crew = CrewPageComponent;
    this.missions = MissionsPageComponent;
  }
}