import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {PageBase} from '../base';
import {CrewProvider} from '../../providers/crew';
import {CrewItem} from '../../components/crew-item/crew-item';
import {Collapsible} from '../../components/list/collapsible';
import {SKILLS, SKILL_NAMES} from '../../interfaces/crew';
import {CrewMember} from '../../models/crew';
import {TitleCase} from '../../pipes/titlecase';

type TLists = {
  crew:CrewMember[]
  header?:string,
  skill?:string,
}[];

@Component(
  {
    directives:  [CrewItem, Collapsible],
    pipes:       [TitleCase],
    templateUrl: 'build/pages/crew-list/crew-list.html',
  })
export class CrewList extends PageBase
{
  private crew:CrewProvider;
  private groups:string[] = ['Alphabet', 'Skills', 'Stars', 'Traits'];

  private currentGroup:string = this.groups[0];

  private traitList:string[] = [];

  private lists:TLists;

  /**
   * Currently active skill filter, for skills tab
   */
  private skillFilter:string = 'cmd';

  /**
   * Currently active rarity filter, for stars tab
   */
  private starFilter:number = 5;

  /**
   * Currently active trait filter, for traits tab
   */
  private traitFilter:string = 'Starfleet';

  /**
   * All available skills, for skills tab
   */
  private skills:string[];

  /**
   * All skill names, for skills tab
   */
  private skillNames:string[];

  /**
   * Sort order
   */
  private sso:string;

  public constructor(nav:NavController, crew:CrewProvider)
  {
    super(nav);
    this.crew = crew;
    this.traitList = crew.traits;
    this.tabAlphabet();

    /*
     * Template only variables will generate the `unused variable` warning,
     * do initialization in constructor to prevent the warning
     */
    this.skills = SKILLS;
    this.skillNames = SKILL_NAMES;
    this.sso = 'Sort by name';
    this.currentGroup = this.groups[0];
  }

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
        crew:  this.crew.bySkill(this.skillFilter).map(i => this.crew.get(i)),
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
}
