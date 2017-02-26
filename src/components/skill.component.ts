/*
 *  @author  eidng8
 *  @license https://creativecommons.org/licenses/by-sa/4.0/
 *  @link    https://github.com/eidng8/stthb
 */

/**
 * Created by JC on 2016-09-11.
 */
import { Component, Input } from '@angular/core';

@Component({
  selector:    'hb-skill',
  templateUrl: 'skill.html',
})
export class SkillComponent {
  @Input() public name: string;
  @Input() public value: number;
}
