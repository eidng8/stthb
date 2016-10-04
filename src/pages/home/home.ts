import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {PageBase} from '../base';
import {CrewProvider} from '../../providers/crew';

@Component(
  {
    templateUrl: 'home.html',
  })
export class HomePage extends PageBase
{
  public constructor(nav:NavController, crew:CrewProvider)
  {
    super(nav);
  }
}
