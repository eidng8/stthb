/**
 * Created by JC on 2016-09-11.
 */

import {Component, Input} from '@angular/core';
import {CrewMember} from '../../models/crew';

@Component(
  {
    selector:    'crew-item',
    templateUrl: 'crew-item.html',
  })
export class CrewItem
{
  @Input() public crew:CrewMember;
  @Input() public skill:string;
  @Input() public unlock:boolean;
}
