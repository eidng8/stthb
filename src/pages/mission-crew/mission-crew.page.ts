import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {PageBase} from '../base';
import {CrewProvider} from '../../providers/crew';
import {IMission} from '../../interfaces/db/mission';

@Component(
  {
    templateUrl: 'mission-crew.html',
  })
export class MissionCrewPage extends PageBase
{
  public groups:string[] = ['Stars', 'Skills', 'Locks'];
  public currentGroup:string = this.groups[0];
  public crew:CrewProvider;
  public filters:any;
  public mission:IMission;

  public constructor(nav:NavController, crew:CrewProvider, params:NavParams)
  {
    super(nav);
    this.mission = params.data.mission;
    this.crew = crew;
    // this.fits = this.mission.crew;

    this.filters = [
      {
        filter: star => this.crew.byStar(star),
        list:   [5, 4, 3, 2, 1],
        name:   this.groups[0],
      },
      {
        filter: skill => this.crew.bySkill(skill),
        // list:   SKILLS.list.abbr,
        name:   this.groups[1],
      },
      {
        filter: trait => this.crew.byTrait(trait),
        list:   this.mission.locks,
        name:   this.groups[2],
      },
    ];
  }
}
