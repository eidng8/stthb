/*
 *  @author  eidng8
 *  @license https://creativecommons.org/licenses/by-sa/4.0/
 *  @link    https://github.com/eidng8/stthb
 */
import { Component, ElementRef, Input, OnInit, Renderer } from '@angular/core';
import { MemberModel } from '../../models/member.model';
import { ERarity } from '../../shared/data.type';
import { TImageSet, wikiImageSet } from '../../shared/utils';

@Component({
  selector: 'jc-member-brief', templateUrl: 'member-brief.html',
})
export class MemberBriefComponent implements OnInit {

  @Input() member: MemberModel;

  thumb: string = '/assets/img/undef.png';

  thumbSet: string = '';

  constructor(private elem: ElementRef, private renderer: Renderer) {
  }

  ngOnInit(): void {
    if (this.member) {
      this.renderer.setElementClass(this.elem.nativeElement,
        `rarity-${ERarity[this.member.stars]}`, true);
      const imgset: TImageSet = wikiImageSet(this.member.picture);
      this.thumb              = imgset.src;
      this.thumbSet           = imgset.set;
    }
  }
}
