/**
 * Created by JC on 2016-09-11.
 */

import {Component, Input} from '@angular/core';
import {IMission} from '../../interfaces/db/mission';

@Component(
  {
    selector:    'mission-item',
    templateUrl: 'mission-item.html',
  })
export class MissionItemComponent
{
  // tslint:disable-next-line:no-unused-variable
  @Input() public mission:IMission;
}
