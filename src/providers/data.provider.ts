/*
 *  @author  eidng8
 *  @license https://creativecommons.org/licenses/by-sa/4.0/
 *  @link    https://github.com/eidng8/stthb
 */

import { Observable } from 'rxjs/Observable';
import '../shared/rxops';
import { Injectable } from '@angular/core';
import { DataService } from '../shared/data.service';
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
  protected ready: boolean = false;

  // endregion

  // region Read-only Properties

  // endregion

  constructor(protected server: DataService,
    protected readonly crew: CrewProvider,
    protected readonly missions: MissionsProvider) {
  }

  /**
   * Emits when the provider is ready to serve.
   *
   * Always emits `true` after data has been loaded successfully.
   */
  whenReady(): Observable<boolean> {
    if(this.ready) {
      return Observable.of(true);
    }

    return this.server.fetch().map(() => {
      this.ready = true;
      return true;
    });
  }
}
