/**
 * Created by JC on 2016-09-10.
 */

import {DataService} from './data-service';

export abstract class ProviderBase
{
  protected db:DataService;

  public constructor(db:DataService)
  {
    this.db = db;
  }

  public idFromName(name:string):string
  {
    return name.trim().toLowerCase().replace(/[^a-z0-9]/g, '.');
  }

  public named(name:string):any
  {
    return this.byId(this.idFromName(name));
  }

  public abstract get(idx:number):any;

  public abstract byId(id:string):any;

  public abstract list():any[];

  public abstract count():number;
}
