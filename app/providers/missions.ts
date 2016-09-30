/**
 * Created by JC on 2016-09-09.
 */

import {Injectable} from '@angular/core';
import {DataService} from './data-service/data-service';
import {IMission, EMissionTypes} from '../interfaces/db/mission';
import {EDocumentTypes} from '../interfaces/db/document';
import {ProviderBase} from './base';

@Injectable()
export class MissionProvider extends ProviderBase
{
  protected db:DataService;
  protected away:IMission[] = [];
  protected cadet:IMission[] = [];
  protected idAway:{[key:string]:number} = <any>{};
  protected idCadet:{[key:string]:number} = <any>{};

  public constructor(db:DataService)
  {
    super(db);

    db.away({include_docs: true})
      .then(
        data =>
        {
          data.rows.forEach(
            (row, i) =>
            {
              this.away.push(<IMission>row.doc[EDocumentTypes.mission]);
              this.idAway[row.id] = i;
            });
        })
      .catch(err => console.log('query away error', err));

    db.cadet({include_docs: true})
      .then(
        data =>
        {
          data.rows.forEach(
            (row, i) =>
            {
              this.cadet.push(<IMission>row.doc[EDocumentTypes.mission]);
              this.idCadet[row.id] = i;
            });
        })
      .catch(err => console.log('query cadet error', err));
  }

  public get length():number
  {
    if(this.away && this.cadet)
    {
      return this.away.length + this.cadet.length;
    }

    return 0;
  }

  public get awayList():IMission[]
  {
    return this.list(EMissionTypes.away);
  }

  public get cadetList():IMission[]
  {
    return this.list(EMissionTypes.cadet);
  }

  public count(type?:EMissionTypes):number
  {
    if(EMissionTypes.cadet == type)
    {
      return this.cadet ? this.cadet.length : 0;
    }
    return this.away ? this.away.length : 0;
  }

  public get(idx:number, type?:EMissionTypes):any
  {
    if(EMissionTypes.cadet == type)
    {
      return this.cadet[idx];
    }

    return this.away[idx];
  }

  public byId(id:string, type?:EMissionTypes):any
  {
    if(EMissionTypes.cadet == type)
    {
      return this.cadet[this.idCadet[id]];
    }
    else if(EMissionTypes.away == type)
    {
      return this.away[this.idAway[id]];
    }

    let idx:any = this.idAway[id];
    if(idx)
    {
      return this.away[idx];
    }

    return this.cadet[this.idCadet[id]];
  }

  public list(type?:EMissionTypes):any[]
  {
    return EMissionTypes.cadet != type ? (this.away ? this.away : null)
      : (this.cadet ? this.cadet : null);
  }
}
