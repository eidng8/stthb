/*
 *  @author  eidng8
 *  @license https://creativecommons.org/licenses/by-sa/4.0/
 *  @link    https://github.com/eidng8/stthb
 */

import { Component, ChangeDetectionStrategy } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PageBase } from '../base';
import { CrewProvider } from '../../providers/crew.provider';
import { MemberModel } from '../../models/member.model';
import { CrewMissionsPage } from '../crew-missions/crew-missions.page';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl:     'crew.html',
})
export class CrewPage extends PageBase {

  constructor(public crew: CrewProvider, nav: NavController) {
    super(nav);
  }

  setFilter(): void {
    // this.navCtl.push(FilterPage);
  }

  view(member: MemberModel): void {
    this.navCtl.push(CrewMissionsPage, {member})
      .then(() => console.debug('crew mission page shown'));
  }
}
