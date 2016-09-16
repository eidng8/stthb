/**
 * Created by JC on 2016-09-11.
 */

import {Component, Input} from '@angular/core';

@Component(
  {
    selector:    'skill-item',
    templateUrl: 'build/components/skill-item/skill-item.html',
  })
export class SkillItem
{
  // tslint:disable:no-unused-variable
  @Input() private name:string;
  @Input() private value:number;
  // tslint:enable:no-unused-variable
}
