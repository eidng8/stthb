import {Component} from '@angular/core';
import {Platform} from 'ionic-angular';
import {StatusBar} from 'ionic-native';
import {TabsPage} from '../pages/tabs/tabs';


@Component({
             template: `<ion-nav [root]="rootPage"></ion-nav>`,
           })
export class MyApp
{
  public rootPage:any = TabsPage;

  public constructor(platform:Platform)
  {
    platform.ready().then(() =>
                          {
                            // okay, so the platform is ready and our plugins
                            // are available. here you can do any higher level
                            // native things you might need.
                            StatusBar.styleDefault();
                          });
  }
}
