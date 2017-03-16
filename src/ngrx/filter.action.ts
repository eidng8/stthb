import '../shared/rxops';
import { Injectable } from '@angular/core';
import { Action, Store, combineReducers } from '@ngrx/store';
import { IState } from '../shared/data.type';
import { filter } from './filter.reducer';
import { compose } from '@ngrx/core';

@Injectable()
export class FilterAction
{
  static readonly DATA_READY = 'DATA_READY';

  get dataReady(): Action {
    return {type: FilterAction.DATA_READY};
  }
}
