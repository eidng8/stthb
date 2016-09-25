import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {MissionProvider} from '../../providers/missions';
import {EMissionTypes, IMission} from '../../interfaces/db/mission';
import {MissionItem} from '../../components/mission-item/mission-item';
import {CrewProvider} from '../../providers/crew';
import {ICrewMember} from '../../interfaces/crew';

@Component(
  {
    directives:  [MissionItem],
    templateUrl: 'build/pages/mission-list/mission-list.html',
  })
export class MissionList
{
  private nav:NavController;
  private crew:CrewProvider;
  private missions:MissionProvider;
  private groups:string[];

  private currentGroup:string;

  public constructor(
    nav:NavController, missions:MissionProvider, crew:CrewProvider)
  {
    this.nav = nav;
    this.crew = crew;
    this.missions = missions;

    this.groups = [
      `Away (${this.missions.count()})`,
      `Cadet (${this.missions.count(EMissionTypes.cadet)})`,
    ];
    this.currentGroup = this.groups[0];
  }

  // tslint:disable-next-line:no-unused-variable
  private findCrew(mission:IMission):void
  {
    /*mission.crew = [];
     for(const char of this.crew.list())
     {
     if(this.fitsMission(char, mission))
     {
     // mission.crew.push(char);
     }
     }
     this.nav.push(MissionCrew, {mission: mission});*/
  }

  private fitsMission(char:ICrewMember, mission:IMission):boolean
  {
    /*let cs:number[];
     for(const skill of SKILLS.list.abbr)
     {
     if(this.fitsCadet(char, mission, skill))
     {
     continue;
     }

     if('undefined' == typeof char[skill])
     {
     continue;
     }

     cs = <number[]>char[skill];
     return cs[cs.length - 1] && mission.skills.indexOf(skill) > -1;
     }
     */
    return false;
  }

  private fitsCadet(char:ICrewMember, mission:IMission, skill:string):boolean
  {
    if(EMissionTypes.cadet == mission.type)
    {
      return !(char.stars > 2 || 'undefined' == typeof char[skill]);
    }

    return false;
  }
}
