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
export class DataService implements IServerData {

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

  // region Read-only Properties

  /**
   * List of all characters
   */
  get characters(): string[] {
    return this.data.characters;
  }

  /**
   * List of all crew member.
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
   * The timestamp when this data is generated
   */
  get generatedAt(): number {
    return this.data.generatedAt;
  }

  /**
   * List of all missions
   */
  get missions(): IMission[] {
    return this.data.missions;
  }

  /**
   * List of all races
   */
  get races(): string[] {
    return this.data.races;
  }

  /**
   * List of all skills
   */
  get skills(): string[] {
    return this.data.skills;
  }

  /**
   * The timestamp when this data is generated
   */
  get time(): moment.Moment {
    return moment.unix(this.generatedAt);
  }

  /**
   * List of all traits
   *
   * Please note that, this list contains only traits that are actually
   * possessed by crew members. e.g. no one possesses the 'Rich' traits, so you
   * won't find it in this list.
   */
  get traits(): string[] {
    return this.data.traits;
  }

  /**
   * Server data version
   */
  get version(): number {
    return this.data.version;
  }

  // endregion

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

  // todo private fetchRemoteData() {
  //   return this.http.get(this.localUrl);
  // }
}
