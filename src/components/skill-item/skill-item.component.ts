/**
 * Created by JC on 2016-09-11.
 */

import {Component, Input} from '@angular/core';

@Component(
  {
    selector:    'skill-item',
    templateUrl: 'skill-item.html',
  })
export class SkillItemComponent
{
  @Input() public name:string;
  @Input() public value:number;
}
