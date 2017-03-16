import '../shared/rxops';
import { Injectable } from '@angular/core';
import { Action, Store, combineReducers } from '@ngrx/store';
import { IState } from '../shared/data.type';
import { filter } from './filter.reducer';
import { compose } from '@ngrx/core';
import { FilterAction } from './filter.action';
import { FilterSelector } from './filter.selector';

const exs: any = {filter};

const red: any =
  compose(/*storeLogger({collapsed: true}),*/ combineReducers)(exs);

// ng2-final AoT needs this declaration to be static
// don't use the style `export const func = () => {...}`
// https://github.com/ngrx/store/issues/190
export function reducers(state: IState, action: Action): any
{
  return red(state, action);
}

@Injectable()
export class StateService
{
  constructor(private store: Store<IState>, private filter: FilterAction,
    private fs: FilterSelector) {
  }

  get filters(): FilterAction {
    return this.filter;
  }

  perform(action: Action): void {
    this.store.dispatch(action);
  }

  on(func: Function) {
    return this.store.let(this.fs.filter).subscribe(func);
  }
}
