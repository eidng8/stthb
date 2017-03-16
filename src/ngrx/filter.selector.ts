/*
 *  @author  eidng8
 *  @license https://creativecommons.org/licenses/by-sa/4.0/
 *  @link    https://github.com/eidng8/stthb
 */

import { Observable } from 'rxjs/Observable';
import '../shared/rxops';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

@Injectable()
export class FilterSelector<T, R> {
  static reducer: string = 'filter';

  get filter(): (selector: Observable<T>) => Observable<R> {
    return (store: Store<T>): Observable<R> => store
      .select<R>(FilterSelector.reducer)
      .filter(state => !!state)
      ;
  }
}
