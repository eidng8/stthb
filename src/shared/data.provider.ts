/*
 *  @author  eidng8
 *  @license https://creativecommons.org/licenses/by-sa/4.0/
 *  @link    https://github.com/eidng8/stthb
 */

import { Observable } from 'rxjs/Observable';
import './rxops';
import { Injectable } from '@angular/core';
import { DataService } from './data.service';
import { CrewProvider } from './crew.provider';
import { MissionsProvider } from './missions.provider';

@Injectable()
/**
 * Fundamental data processing features
 */
export class DataProvider {

  // region Private Fields

  /**
   * Indicates if the instance is ready to serve.
   */
  private _ready: boolean = false;

  /**
   * Crew features
   */
  private _crew: CrewProvider;

  /**
   * Mission features
   */
  private _missions: MissionsProvider;

  // endregion

  // region Read-only Properties

  /**
   * Crew features
   */
  get crew(): CrewProvider {
    return this._crew;
  }

  /**
   * Mission features
   */
  get missions(): MissionsProvider {
    return this._missions;
  }

  // endregion

  constructor(private _data: DataService) {
  }

  /**
   * Emits when the provider is ready to serve.
   *
   * Always emits `true` after data has been loaded successfully.
   */
  ready(): Observable<true> {
    if(this._ready) {
      return Observable.of(true);
    }

    return this._data.fetch().map(() => {
      this._crew = new CrewProvider(this._data);
      this._missions = new MissionsProvider(this._data);
      this._ready = true;
      return true;
    });
  }
}
