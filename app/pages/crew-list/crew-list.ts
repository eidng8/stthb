import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {SKILLS} from '../../interface/crew';
import {PageBase} from '../base';
import {CrewProvider} from '../../providers/crew';
import {CrewItem} from '../../components/crew-item/crew-item';
import {Collapsible} from '../../components/list/collapsible';

@Component(
  {
    directives:  [CrewItem, Collapsible],
    templateUrl: 'build/pages/crew-list/crew-list.html',
  })
export class CrewList extends PageBase
{
  private crew:CrewProvider;
  private groups:string[] = ['Alphabet', 'Stars', 'Skills', 'Traits'];

  // tslint:disable:no-unused-variable
  // noinspection JSUnusedLocalSymbols
  private currentGroup:string = this.groups[0];
  // noinspection JSUnusedLocalSymbols
  private skillList:string[] = SKILLS.list.abbr;
  // noinspection JSUnusedLocalSymbols
  private traitList:string[] = [];
  // noinspection JSUnusedLocalSymbols
  private skillAbbr:{[key:string]:string} = SKILLS.abbr;
  // tslint:enable:no-unused-variable

  public constructor(nav:NavController, crew:CrewProvider)
  {
    super(nav);
    this.crew = crew;
    this.traitList = crew.listTraits();
  }
}
