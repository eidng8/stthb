/**
 * Created by JC on 2016-09-11.
 */

import {Component, Input} from '@angular/core';
import {SkillItem} from '../skill-item/skill-item';
import {CrewMember} from '../../models/crew';

@Component(
  {
    directives:  [SkillItem],
    selector:    'crew-item',
    templateUrl: 'build/components/crew-item/crew-item.html',
  })
export class CrewItem
{
  // tslint:disable:no-unused-variable
  @Input() private crew:CrewMember;

  // noinspection JSUnusedLocalSymbols
  @Input() private skill:string;

  // noinspection JSUnusedLocalSymbols
  @Input() private unlock:boolean;

  // private skills:string[] = SKILLS.list.abbr;
  // tslint:enable:no-unused-variable

  // private skillValue:number;

  private ngOnInit():void
  {
    /*
     if(!this.skill)
     {
     return;
     }

     let val:any = this.crew[this.skill];
     val = val[val.length - 1];
     this.skillValue = val[val.length - 1];
     */
  }
}
