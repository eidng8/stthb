/*
 *  @author  eidng8
 *  @license https://creativecommons.org/licenses/by-sa/4.0/
 *  @link    https://github.com/eidng8/stthb
 */

import '../shared/rxops';
import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';

@Injectable()
export class FilterAction {
  static readonly DATA_READY: string = 'DATA_READY';

  get dataReady(): Action {
    return {type: FilterAction.DATA_READY};
  }
}
