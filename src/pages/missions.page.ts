/*
 *  @author  eidng8
 *  @license https://creativecommons.org/licenses/by-sa/4.0/
 *  @link    https://github.com/eidng8/stthb
 */

import { Component } from '@angular/core';

@Component({
  templateUrl: 'missions.html',
})
export class MissionsPageComponent {
  /*
   public groups:string[];
   public currentGroup:string;
   public crew:CrewProvider;
   public missions:MissionProvider;

   private nav:NavController;

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
   */

  /*
   // tslint:disable-next-line:no-unused-variable
   private findCrew(mission:IMission):void
   {
   /!*mission.crew = [];
   for(const char of this.crew.list())
   {
   if(this.fitsMission(char, mission))
   {
   // mission.crew.push(char);
   }
   }
   this.nav.push(MissionCrew, {mission: mission});*!/
   }

   private fitsMission(char:IMember, mission:IMission):boolean
   {
   /!*let cs:number[];
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
   *!/
   return false;
   }

   private fitsCadet(char:IMember, mission:IMission, skill:string):boolean
   {
   if(EMissionTypes.cadet == mission.type)
   {
   return !(char.stars > 2 || 'undefined' == typeof char[skill]);
   }

   return false;
   }
   */
}
