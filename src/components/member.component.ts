/*
 *  @author  eidng8
 *  @license https://creativecommons.org/licenses/by-sa/4.0/
 *  @link    https://github.com/eidng8/stthb
 */

/**
 * Created by JC on 2016-09-11.
 */
import { Component, Input } from '@angular/core';
import { MemberModel } from '../models/member.model';

@Component({
  selector:    'hb-member',
  templateUrl: 'member.html',
})
export class MemberComponent {
  @Input() public crew: MemberModel;
  @Input() public skill: string;
  @Input() public unlock: boolean;
}
