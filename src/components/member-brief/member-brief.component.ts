/*
 *  @author  eidng8
 *  @license https://creativecommons.org/licenses/by-sa/4.0/
 *  @link    https://github.com/eidng8/stthb
 */

import { Component, Input, OnInit, ElementRef, Renderer } from '@angular/core';
import { MemberModel } from '../../models/member.model';
import { ERarity } from '../../shared/data.type';

@Component({
  selector:    'jc-member-brief',
  templateUrl: 'member-brief.html',
})
export class MemberBriefComponent implements OnInit {

  @Input() member: MemberModel;

  constructor(private elem: ElementRef, private renderer: Renderer) {
  }

  ngOnInit(): void {
    if(this.member) {
      this.renderer.setElementClass(this.elem.nativeElement,
        `rarity-${ERarity[this.member.stars]}`, true);
    }
  }
}
