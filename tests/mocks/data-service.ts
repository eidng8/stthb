import {Injectable} from '@angular/core';
import {IView} from '../../app/interfaces/db/document';
import {AWAY_DATA} from '../data/away';
import {CADET_DATA} from '../data/cadet';
import {CREW_DATA} from '../data/crew';

@Injectable()
export class MockDataService
{
  public constructor()
  {
    return;
  }

  // noinspection JSUnusedGlobalSymbols
  public sync():void
  {
    return;
  }

  public missions(opts?:any):Promise<IView>
  {
    return new Promise(resolve =>
    {
      let data:any = JSON.parse(JSON.stringify(AWAY_DATA));
      data.total_rows += CADET_DATA.total_rows;
      data.rows.concat(CADET_DATA.rows);
      data.rows.sort((a, b) =>
                     {
                       return a.id > b.id ? -1 : 1;
                     });
      resolve(data);
    });
  }

  public away(opts?:any):Promise<IView>
  {
    return new Promise(resolve =>
    {
      resolve(AWAY_DATA);
    });
  }

  public cadet(opts?:any):Promise<IView>
  {
    return new Promise(resolve =>
    {
      resolve(CADET_DATA);
    });
  }

  public crew(opts?:any):Promise<IView>
  {
    return new Promise(resolve =>
    {
      resolve(CREW_DATA);
    });
  }
}

