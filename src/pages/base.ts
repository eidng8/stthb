/**
 * Created by JC on 2016-09-08.
 */

import {NavController} from 'ionic-angular';


export class PageBase
{
  protected navCtl:NavController;

  public constructor(nav:NavController)
  {
    this.navCtl = nav;
  }
}
