/*
 *  @author  eidng8
 *  @license https://creativecommons.org/licenses/by-sa/4.0/
 *  @link    https://github.com/eidng8/stthb
 */

import values from 'lodash-es/values';
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { PageBase } from '../base';
import { MemberModel } from '../../models/member.model';
import { MissionModel } from '../../models/mission.model';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl:     'crew-missions.html',
})
export class CrewMissionsPage extends PageBase {

  /**
   * The member to show
   */
  member: MemberModel;

  /**
   * one of 'critical', 'pass', or 'unlock'
   */
  types: string[];

  /**
   * Capable missions
   */
  missions: {[key: string]: MissionModel[]} = {};

  constructor(nav: NavController, public params: NavParams) {
    super(nav);
    this.member = params.data.member;
    this.types = Object.keys(this.member.missions);

    this.types.forEach(type => {
      this.missions[type] = values< MissionModel>(this.member.missions[type]);
    });
  }

}
