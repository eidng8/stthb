import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {PageBase} from '../base';

@Component(
  {
    templateUrl: 'home.page.html',
  })
export class HomePage extends PageBase
{
  public constructor(nav:NavController)
  {
    super(nav);
  }
}
