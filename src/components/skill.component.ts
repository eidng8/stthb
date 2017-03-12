/*
 *  @author  eidng8
 *  @license https://creativecommons.org/licenses/by-sa/4.0/
 *  @link    https://github.com/eidng8/stthb
 */

/**
 * Created by JC on 2016-09-11.
 */
import { Component, Input, OnInit } from '@angular/core';
import { SkillModel } from '../models/skill.model';
import { IRange } from '../shared/data.type';

@Component({
  selector:    'jc-skill',
  templateUrl: 'skill.html',
})
export class SkillComponent implements OnInit {
  @Input() skill: SkillModel;

  effective: IRange;

  ngOnInit(): void {
    this.effective = this.skill.effective;
  }
}
