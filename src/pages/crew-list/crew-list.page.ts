import {Observable} from 'rxjs';
import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {PageBase} from '../base';
import {CrewProvider} from '../../providers/crew';
import {CrewMember} from '../../models';
import {Store} from '@ngrx/store';
import {IAppState} from '../../ngrx';
import {FilterPage} from '../filter/filter.page';

export type TLists = {
  crew:CrewMember[]
  header?:string,
  skill?:string,
}[];

@Component(
  {
    templateUrl: 'crew-list.html',
  })
export class CrewListPage extends PageBase
{
  public crew:CrewProvider;
  public groups:string[] = ['Alphabet', 'Skills', 'Stars', 'Traits'];

  public currentGroup:string = this.groups[0];

  public traitList:string[] = [];

  public lists:Observable<any>; // a TLists;

  /**
   * Currently active skill filter, for skills tab
   */
  public skillFilter:string = 'cmd';

  /**
   * Currently active rarity filter, for stars tab
   */
  public starFilter:number = 5;

  /**
   * Currently active trait filter, for traits tab
   */
  public traitFilter:string = 'Starfleet';

  /**
   * All available skills, for skills tab
   */
  public skills:string[];

  /**
   * All skill names, for skills tab
   */
  public skillNames:string[];

  /**
   * Sort order
   */
  public sso:string;

  public constructor(
    nav:NavController, crew:CrewProvider, private _store:Store<IAppState>)
  {
    super(nav);
    this.lists = this._store.select('crew');

    /*
     this.crew = crew;
     this.traitList = crew.traits;
     this.tabAlphabet();
     */

    /*
     * Template only variables will generate the `unused variable` warning,
     * do initialization in constructor to prevent the warning
     */
    /*
     this.skills = SKILLS;
     this.skillNames = SKILL_NAMES;
     this.sso = 'Sort by name';
     this.currentGroup = this.groups[0];
     */
  }

  public setFilter():void
  {
    this.navCtl.push(FilterPage);
  }

  /*
   public switchTab(tab:string):void
   {
   this.lists = [];
   switch(tab)
   {
   case this.groups[0]:
   this.tabAlphabet();
   break;

   case this.groups[1]:
   this.tabSkills();
   break;

   case this.groups[2]:
   this.tabStars();
   break;

   case this.groups[3]:
   this.tabTraits();
   break;
   }
   }

   private tabAlphabet():void
   {
   this.lists = [{crew: this.crew.list()}];
   }

   private tabSkills():void
   {
   this.lists = [
   {
   crew: this.crew.bySkill(this.skillFilter).map(i => this.crew.get(i)),
   skill: this.skillFilter,
   },
   ];
   }

   private tabStars():void
   {
   this.lists = [
   {
   crew: this.crew.byStar(this.starFilter).map(i => this.crew.get(i)),
   },
   ];
   }

   private tabTraits():void
   {
   this.lists = [
   {
   crew: this.crew.byTrait(this.traitFilter).map(i => this.crew.get(i)),
   },
   ];
   }
   */
}
