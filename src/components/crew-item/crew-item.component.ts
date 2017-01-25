/**
 * Created by JC on 2016-09-11.
 */

import {Component, Input} from '@angular/core';
import {CrewMember} from '../../models';

@Component(
  {
    selector:    'crew-item',
    templateUrl: 'crew-item.html',
  })
export class CrewItemComponent
{
  @Input() public crew:CrewMember;
  @Input() public skill:string;
  @Input() public unlock:boolean;
}
