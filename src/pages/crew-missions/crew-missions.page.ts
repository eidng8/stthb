/*
 *  @author  eidng8
 *  @license https://creativecommons.org/licenses/by-sa/4.0/
 *  @link    https://github.com/eidng8/stthb
 */

import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { MissionsProvider } from '../../providers/missions.provider';
import { PageBase } from '../base';
import { CrewProvider } from '../../providers/crew.provider';

@Component({
  templateUrl: 'crew-missions.html',
})
export class CrewMissionsPage extends PageBase {

  constructor(nav: NavController, public params: NavParams,
    public missions: MissionsProvider, public crew: CrewProvider) {
    super(nav);
  }

}
