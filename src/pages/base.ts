/*
 *  @author  eidng8
 *  @license https://creativecommons.org/licenses/by-sa/4.0/
 *  @link    https://github.com/eidng8/stthb
 */
import {NavController} from 'ionic-angular';

export class PageBase {
  protected navCtl: NavController;

  public constructor(nav: NavController) {
    this.navCtl = nav;
  }
}
