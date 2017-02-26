/*
 *  @author  eidng8
 *  @license https://creativecommons.org/licenses/by-sa/4.0/
 *  @link    https://github.com/eidng8/stthb
 */

/**
 * Created by JC on 2016-09-11.
 */
import { Component, Input } from '@angular/core';
import { Mission } from '../models/mission.model';

@Component({
  selector:    'hb-mission',
  templateUrl: 'mission.html',
})
export class MissionComponent {
  @Input() public mission: Mission;
}
