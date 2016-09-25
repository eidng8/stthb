/**
 * Created by JC on 2016-09-25.
 */

import {Component} from '@angular/core';
import {Home} from '../home/home';
import {CrewList} from '../crew-list/crew-list';
import {MissionList} from '../mission-list/mission-list';

@Component(
  {
    templateUrl: 'build/pages/tabs/tabs.html',
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
    this.home = Home;
    this.crew = CrewList;
    this.missions = MissionList;
  }
}
