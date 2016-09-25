import {Injectable} from '@angular/core';
import {IView} from '../../interfaces/db/document';

// tslint:disable:no-require-imports no-var-requires variable-name
var PouchDB:any = require('pouchdb');
PouchDB.plugin(require('pouchdb-find'));
// tslint:enable:no-require-imports no-var-requires variable-name

@Injectable()
export class DataService
{
  protected db:any;

  public constructor()
  {
    this.db = new PouchDB('stthb');
    this.sync();
  }

  public sync():void
  {
    const key:string = 'last-sync', today:number = new Date().getDate();
    if(parseInt(localStorage.getItem(key), 10) === today)
    {
      return;
    }

    if(!navigator.connection || navigator.connection.type == Connection.ETHERNET
       || navigator.connection.type == Connection.WIFI)
    {
      this.db.replicate
          .from(
            'http://localhost:5984/stt', (err:any, res:any):void =>
            {
              if(err)
              {
                console.log('failed to sync', err);
                return;
              }

              this.db.viewCleanup()
                  .then(r => console.log('cleaned up views', r))
                  .catch(e => console.log('failed to clean up views', e));

              this.db.compact()
                  .then(r => console.log('db compact done', r))
                  .catch(e => console.log('failed to compact db', e));

              console.log('sync completed', res);
              localStorage.setItem(key, `${today}`);
            });
    }
  }

  public missions(opts?:any):Promise<IView>
  {
    return this.db.query('missions/all', opts);
  }

  public away(opts?:any):Promise<IView>
  {
    return this.db.query('missions/away', opts);
  }

  public cadet(opts?:any):Promise<IView>
  {
    return this.db.query('missions/cadet', opts);
  }

  public crew(opts?:any):Promise<IView>
  {
    return this.db.query('crew/all', opts);
  }
}

