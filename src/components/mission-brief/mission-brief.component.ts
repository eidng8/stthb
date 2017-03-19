/*
 *  @author  eidng8
 *  @license https://creativecommons.org/licenses/by-sa/4.0/
 *  @link    https://github.com/eidng8/stthb
 */

/**
 * Created by JC on 2016-09-11.
 */
import { Component, Input } from '@angular/core';
import { MissionModel } from '../../models/mission.model';

@Component({
  selector:    'jc-mission-brief',
  templateUrl: 'mission-brief.html',
})
export class MissionBriefComponent {
  @Input() public mission: MissionModel;
}