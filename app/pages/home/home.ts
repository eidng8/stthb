import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {PageBase} from '../base';
import {CrewProvider} from '../../providers/crew';

@Component(
  {
    templateUrl: 'build/pages/home/home.html',
  })
export class Home extends PageBase
{
  public constructor(nav:NavController, crew:CrewProvider)
  {
    super(nav);
  }
}
