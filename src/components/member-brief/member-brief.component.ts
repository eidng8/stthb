/*
 *  @author  eidng8
 *  @license https://creativecommons.org/licenses/by-sa/4.0/
 *  @link    https://github.com/eidng8/stthb
 */

import { Component, Input, OnInit } from '@angular/core';
import { MemberModel } from '../../models/member.model';
import { SkillModel } from '../../models/skill.model';
import { ERarity } from '../../shared/data.type';

@Component({
  selector:    'jc-member-brief',
  templateUrl: 'member-brief.html',
})
export class MemberBriefComponent implements OnInit {
  @Input() member: MemberModel;

  skills: SkillModel[];

  rarity: string;

  ngOnInit(): void {
    this.rarity = ERarity[this.member.stars];
    this.skills = this.member.skills.all;
  }
}
