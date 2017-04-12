/*
 *  @author  eidng8
 *  @license https://creativecommons.org/licenses/by-sa/4.0/
 *  @link    https://github.com/eidng8/stthb
 */

import {
  AfterViewInit, ChangeDetectionStrategy, Component,
} from '@angular/core';
import { Nav } from 'ionic-angular';
import { DataService } from '../../shared/data.service';
import { TabsPage } from '../tabs/tabs.page';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush, templateUrl: 'splash.html',
})
export class SplashPage implements AfterViewInit {
  constructor(private nav: Nav, private server: DataService) {
  }

  ngAfterViewInit(): void {
    this.server.fetch().subscribe(() => {
      this.nav.setRoot(TabsPage).then(() => console.debug('at home now.'));
    });
  }
}
