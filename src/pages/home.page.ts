/*
 *  @author  eidng8
 *  @license https://creativecommons.org/licenses/by-sa/4.0/
 *  @link    https://github.com/eidng8/stthb
 */

import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PageBase } from './base';

@Component({
  templateUrl: 'home.html',
})
export class HomePageComponent extends PageBase {
  message: string = 'Welcome';

  constructor(nav: NavController) {
    super(nav);
  }
}
