import { Observable } from 'rxjs/Observable';
import '../shared/rxops';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { IState } from '../shared/data.type';

@Injectable()
export class FilterSelector
{
  static reducer = 'filter';

  get filter() {
    return (store: Store<IState>): Observable<IState> => store
      .select<IState>(FilterSelector.reducer)
      .filter(state => !!state)
      ;
  }
}
