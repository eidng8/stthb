/**
 * Created by JC on 2016-10-05.
 */

import {ActionReducer} from '@ngrx/store';
import {FilterActions} from '../actions';
import {IFilters, initialFilters} from '../models';

export const filters:ActionReducer<IFilters> = (
  state = initialFilters, action) =>
{
  switch(action.type)
  {
    case FilterActions.RESET_FILTER:
      return Object.assign({}, initialFilters);

    case FilterActions.RESET_STAR_FILTER:
      return Object.assign({}, state, {stars: null});

    case FilterActions.ADD_STAR_FILTER:
      return Object.assign(
        {}, state, {
          stars: Array.isArray(action.payload)
                   ? action.payload : [action.payload],
        });

    case FilterActions.ADD_SKILL_FILTER:
      return Object.assign(
        {}, state, {
          skills: Array.isArray(action.payload)
                    ? action.payload : [action.payload],
        });

    default:
      return state;
  }
};
