import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {PageBase} from '../base';
import {CrewProvider} from '../../providers/crew';
import {CrewItem} from '../../components/crew-item/crew-item';
import {Collapsible} from '../../components/list/collapsible';
import {IMission} from '../../interfaces/db/mission';

@Component(
  {
    directives:  [CrewItem, Collapsible],
    templateUrl: 'build/pages/mission-crew/mission-crew.html',
  })
export class MissionCrew extends PageBase
{
  private crew:CrewProvider;
  // private fits:ICrewMember[];
  private groups:string[] = ['Stars', 'Skills', 'Locks'];
  private filters:any;

  private mission:IMission;

  // tslint:disable:no-unused-variable
  // noinspection JSUnusedLocalSymbols
  private currentGroup:string = this.groups[0];
  // noinspection JSUnusedLocalSymbols
  // private skillAbbr:{[key:string]:string} = SKILLS.abbr;
  // tslint:enable:no-unused-variable

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
