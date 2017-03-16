/*
 *  @author  eidng8
 *  @license https://creativecommons.org/licenses/by-sa/4.0/
 *  @link    https://github.com/eidng8/stthb
 */

import { Moment, unix } from 'moment';
import { Observable } from 'rxjs/Observable';
import './rxops';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { IServerData } from '../interfaces/server-data.interface';
import { IMember } from '../interfaces/member.interface';
import { IMission } from '../interfaces/mission.interface';

@Injectable()
/**
 * Load raw data from local cache or remote server
 */
export class DataService implements IServerData {

  /**
   * URL to local (pre-packaged) data file
   */
  protected readonly localUrl: string = 'data.json';

  // private readonly removeUrl: string = 'http://*****/data.json';

  /**
   * Server data got from local or remote source
   */
  protected data: IServerData;

  protected loaded: boolean = false;

  /**
   * @param http Angular HTTP service
   */
  constructor(private http: Http) {
  }

  // region Read-only Properties

  get ready(): boolean {
    return this.loaded;
  }

  /**
   * List of all characters
   */
  get characters(): string[] {
    return this.data.characters;
  }

  /**
   * List of all crew member.
   */
  get crew(): IMember[] {
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
   * The time when this data is generated
   */
  get time(): Moment {
    return unix(this.generatedAt);
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
  protected getLocalData(): Observable<IServerData> {
    return this.http.get(this.localUrl)
      .map<IServerData>(res => {
        this.loaded = true;
        return this.data = res.json();
      });
  }

  // todo protected fetchRemoteData() {
  //   return this.http.get(this.localUrl);
  // }
}
