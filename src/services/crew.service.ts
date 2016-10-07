/**
 * Created by JC on 2016-10-06.
 */

import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {EDocumentTypes} from '../interfaces/db/document';
import {ICrewMember} from '../models';

@Injectable()
export class CrewService
{

  public constructor(private _http:Http)
  {
  }

  public get():Observable<ICrewMember[]>
  {
    return this
      ._http.get('/assets/data/crew.json')
      .map(res => res.json().rows.map(row => row.doc[EDocumentTypes.crew]));
  }
}
