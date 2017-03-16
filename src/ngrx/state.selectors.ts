/*
 *  @author  eidng8
 *  @license https://creativecommons.org/licenses/by-sa/4.0/
 *  @link    https://github.com/eidng8/stthb
 */

import { Store } from '@ngrx/store';
import { Injectable } from '@angular/core';
import { IState } from '../shared/data.type';

@Injectable()
export class StateSelectors {
  constructor(private store: Store<IState>) {
  }

  filterRarity() {
    return this.store.let(this.selectFilterRarity());
  }

  selectFilterRarity() {
    return state => state.select('filter');
  }
}
