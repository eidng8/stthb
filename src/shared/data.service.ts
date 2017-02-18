/*
 *  @author  eidng8
 *  @license https://creativecommons.org/licenses/by-sa/4.0/
 *  @link    https://github.com/eidng8/stthb
 */

import * as moment from 'moment';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import {
  IServerData,
  ICrewMember,
  IMission
} from './data/server-data.interface';

@Injectable()
export class DataService {
  /**
   * URL to local (pre-packaged) data file
   */
  private readonly localUrl: string = 'data.json';

  // private readonly removeUrl: string = 'http://*****/data.json';

  /**
   * Server data got from local or remote source
   */
  private data: IServerData;

  constructor(private http: Http) {
  }

  /**
   * List of all crew member
   */
  get crew(): ICrewMember[] {
    return this.data.crew;
  }

  /**
   * List of all episodes
   */
  get episodes(): string[] {
    return this.data.episodes;
  }

  /**
   * List of all missions
   */
  get missions(): IMission[] {
    return this.data.missions;
  }

  /**
   * Server data version (timestamp in seconds)
   */
  get generatedAt(): moment.Moment {
    return moment.unix(this.data.generatedAt);
  }

  /**
   * Server data version (timestamp in seconds)
   */
  get version(): number {
    return this.data.version;
  }

  /**
   * Fetch data from first available source
   */
  fetch(): Observable<IServerData> {
    return this.getLocalData();
  }

  /**
   * Fetch server data from local (pre-packaged) source
   */
  private getLocalData(): Observable<IServerData> {
    return this.http.get(this.localUrl).map<IServerData>(res => {
      this.data = res.json();
      return this.data;
    });
  }

  // private fetchRemoteData() {
  //   return this.http.get(this.localUrl);
  // }
}
