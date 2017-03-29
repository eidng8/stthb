/*
 *  @author  eidng8
 *  @license https://creativecommons.org/licenses/by-sa/4.0/
 *  @link    https://github.com/eidng8/stthb
 */

import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MissionsProvider } from '../../providers/missions.provider';
import { PageBase } from '../base';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl:     'missions.html',
})
export class MissionsPage extends PageBase {

  constructor(public missions: MissionsProvider, nav: NavController) {
    super(nav);
  }

}
