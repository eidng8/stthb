/**
 * Created by JC on 2016-09-09.
 */

import {Injectable} from '@angular/core';
import {DataService} from './data-service/data-service';
import {ICrew, SKILLS} from '../interface/crew';
import {DocumentTypes, IRow} from '../interface/document';
import {ProviderBase} from './base';

@Injectable()
export class CrewProvider extends ProviderBase
{
  protected crew:ICrew[] = <any>[];
  protected idMap:{[key:string]:number} = <any>{};
  protected idxStars:number[][] = <any>[[], [], [], [], [], []];
  protected idxSkills:{[key:string]:number[]} = <any>[];
  protected idxTraits:string[][] = [];
  protected traitList:string[] = [];

  public constructor(db:DataService)
  {
    super(db);
    db.crew({include_docs: true})
      .then(
        data =>
        {
          let row:IRow;
          for(let i:number = 0; i < data.rows.length; i++)
          {
            row = data.rows[i];
            this.crew.push(<ICrew>row.doc[DocumentTypes.crew]);
            this.idMap[row.id] = i;
          }

          this.buildIndexes();
        })
      .catch(err => console.log('query error', err));
  }

  public get length():number
  {
    return this.crew.length;
  }

  public count():number
  {
    return this.crew.length;
  }

  public list():ICrew[]
  {
    return this.crew;
  }

  public get(idx:number):ICrew
  {
    return this.crew[idx];
  }

  public byId(id:string):ICrew
  {
    return this.crew[this.idMap[id]];
  }

  public byStar(star:number):number[]
  {
    return this.idxStars[star];
  }

  public bySkill(skill:string):number[]
  {
    return this.idxSkills[skill];
  }

  public byTrait(trait:string):number[]
  {
    return this.idxTraits[trait];
  }

  public listTraits():string[]
  {
    return this.traitList;
  }

  protected buildIndexes():void
  {
    let crew:ICrew;
    for(let i:number = 0; i < this.crew.length; i++)
    {
      crew = this.crew[i];
      this.indexByStars(crew, i);
      this.indexBySkills(crew, i);
      this.indexByTraits(crew, i);
    }

    delete this.idxStars[0];

    for(const skill in this.idxSkills)
    {
      if(!this.idxSkills.hasOwnProperty(skill))
      {
        continue;
      }

      this.idxSkills[skill]
        .sort(
          (a, b) =>
          {
            let as:any = this.get(a)[skill];
            let bs:any = this.get(b)[skill];
            as = as[as.length - 1];
            as = as[as.length - 1];
            bs = bs[bs.length - 1];
            bs = bs[bs.length - 1];
            return bs - as;
          });
    }
  }

  protected indexByStars(crew:ICrew, idx:number):void
  {
    // the original sequence is already in correct sort order (name ascending)
    this.idxStars[crew.stars].push(idx);
  }

  protected indexBySkills(crew:ICrew, idx:number):void
  {
    for(const skill of SKILLS.list.abbr)
    {
      if(crew[skill] && (<number[]>crew[skill]).length > 0)
      {
        if(!this.idxSkills[skill])
        {
          this.idxSkills[skill] = [];
        }
        this.idxSkills[skill].push(idx);
      }
    }
  }

  protected indexByTraits(crew:ICrew, idx:number):void
  {
    // the original sequence is already in correct sort order (name ascending)
    for(const trait of crew.traits)
    {
      if(!this.idxTraits[trait])
      {
        this.idxTraits[trait] = [];
        this.traitList.push(trait);
      }
      this.idxTraits[trait].push(idx);
    }
  }
}
