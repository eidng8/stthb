/**
 * Created by JC on 2016-09-11.
 */

import {Component, Input} from '@angular/core';
import {IMission} from '../../interface/mission';
import {SkillItem} from '../skill-item/skill-item';

@Component(
  {
    directives:  [SkillItem],
    selector:    'mission-item',
    templateUrl: 'build/components/mission-item/mission-item.html',
  })
export class MissionItem
{
  // tslint:disable-next-line:no-unused-variable
  @Input() private mission:IMission;
}
