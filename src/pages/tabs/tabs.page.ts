/**
 * Created by JC on 2016-09-25.
 */

import {Component} from '@angular/core';
import {HomePage} from '../home/home.page';
import {CrewListPage} from '../crew-list/crew-list.page';
import {MissionListPage} from '../mission-list/mission-list.page';

@Component(
  {
    templateUrl: 'tabs.html',
  })
export class TabsPage
{

  public home:any;
  public crew:any;
  public missions:any;

  public constructor()
  {
    // this tells the tabs component which Pages
    // should be each tab's root Page
    this.home = HomePage;
    this.crew = CrewListPage;
    this.missions = MissionListPage;
  }
}
