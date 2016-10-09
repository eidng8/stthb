/**
 * Created by JC on 2016-09-09.
 */

import 'rxjs/add/observable/of';
import 'rxjs/add/observable/fromPromise';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import {Injectable} from '@angular/core';
import {Actions} from '@ngrx/effects';
import {DataService} from './data-service';
import {ProviderBase} from './base';
import {CrewMember} from '../models';
import {SKILLS} from '../interfaces/crew';


@Injectable()
/**
 * Crew data provider
 */
export class CrewProvider extends ProviderBase
{

  // noinspection JSUnusedGlobalSymbols
  /*
   @Effect() public load$:Observable<Action>
   = this.actions$
   .ofType(AppActions.LOAD_CREW)
   .switchMap(
   () =>
   {
   return Observable
   .fromPromise(this.db.crew({include_docs: true}))
   .map(crew => AppActions.loadCrewDone(crew))
   .catch(
   () =>
   {
   return Observable.of(
   {type: AppActions.LOAD_CREW_FAILED});
   });
   });
   */

  /**
   * List of all crew members
   */
  protected crew:CrewMember[] = [];

  /**
   * List of all found traits in game
   */
  protected _traits:string[] = [];

  /**
   * Name index
   */
  protected idxNames:{[key:string]:number} = {};

  /**
   * Rarity index
   */
  protected idxStars:number[][] = [[], [], [], [], [], []];

  /**
   * Skill index
   */
  protected idxSkills:{[key:string]:number[]} = {};

  /**
   * Trait index
   */
  protected idxTraits:string[][] = [];

  /**
   * Load all crew data from database.
   * @param db
   * @param actions$
   */
  public constructor(db:DataService, private actions$:Actions)
  {
    super(db);

    /*
     db.crew({include_docs: true})
     .then(
     data =>
     {
     let mem:IDBCrew;
     data.rows.forEach(
     (row:IRow, idx:number) =>
     {
     mem = <IDBCrew>row.doc[EDocumentTypes.crew];
     this.crew.push(new CrewMember(mem));
     this.idxNames[mem.name] = idx;
     });

     this.buildIndexes();
     })
     .catch(
     err =>
     {
     console.log('query error', err);
     if(err.stack)
     {
     console.log(err.stack);
     }
     });
     */
  }

  /**
   * Number of crew members
   */
  public get length():number
  {
    return this.crew.length;
  }

  /**
   * List of all found traits in game
   */
  public get traits():string[]
  {
    return this._traits;
  }

  /**
   * Number of crew members, alias of `length`
   */
  public count():number
  {
    return this.length;
  }

  /**
   * All crew members data
   */
  public list():CrewMember[]
  {
    return this.crew;
  }

  /**
   * Crew members data at the given index
   */
  public get(idx:number):CrewMember
  {
    return this.crew[idx];
  }

  /**
   * Alias of {@link byName()}
   */
  public byId(id:string):CrewMember
  {
    return this.byName(id);
  }

  /**
   * Crew members data of the given name
   */
  public byName(name:string):CrewMember
  {
    return this.crew[this.idxNames[name]];
  }

  /**
   * Get crew of specified rarity
   */
  public byStar(star:number):number[]
  {
    return this.idxStars[Math.max(1, Math.min(5, star))];
  }

  /**
   * Get crew with specified skill
   */
  public bySkill(skill:string):number[]
  {
    return this.idxSkills[skill];
  }

  /**
   * Get crew with specified trait
   */
  public byTrait(trait:string):number[]
  {
    return this.idxTraits[trait];
  }

  /**
   * Build all index in proper sorting order
   */
  protected buildIndexes():void
  {
    this.crew.forEach(
      (mem, i) =>
      {
        mem = this.crew[i];
        this.indexByStars(mem, i);
        this.indexBySkills(mem, i);
        this.indexByTraits(mem, i);
      });
    this.sortBySkill();
    delete this.idxStars[0];
  }

  /**
   * Add the given member to rarity index
   */
  protected indexByStars(crew:CrewMember, idx:number):void
  {
    // the original sequence is already in correct sort order (name ascending)
    this.idxStars[crew.stars].push(idx);
  }

  /**
   * Add the given member to skill index
   */
  protected indexBySkills(crew:CrewMember, idx:number):void
  {
    let skills:string[] = crew.possessing;
    if(!skills)
    {
      return;
    }

    for(const skill of crew.possessing)
    {
      if(!this.idxSkills[skill])
      {
        this.idxSkills[skill] = [];
      }
      this.idxSkills[skill].push(idx);
    }
  }

  /**
   * Add the given member to trait index
   */
  protected indexByTraits(crew:CrewMember, idx:number):void
  {
    // the original sequence is already in correct sort order (name ascending)
    for(const trait of crew.traits)
    {
      if(!this.idxTraits[trait])
      {
        this.idxTraits[trait] = [];
        this._traits.push(trait);
      }
      this.idxTraits[trait].push(idx);
    }
  }

  /**
   * Sort crew data by skill value, descending order.
   */
  protected sortBySkill():void
  {
    for(const skill of SKILLS)
    {
      this.idxSkills[skill]
        .sort(
          (a, b) =>
          {
            return this.crew[b].skillValue(skill)
                   - this.crew[a].skillValue(skill);
          });
    }
  }
}
