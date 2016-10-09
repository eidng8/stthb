/**
 * Created by JC on 2016-10-05.
 */

import {ActionReducer} from '@ngrx/store';
import {CrewActions} from '../actions';
import {ICrewMember} from '../../models';

export const crew:ActionReducer<ICrewMember[]> =
  (state = <ICrewMember[]>[], action) =>
  {
    switch(action.type)
    {
      case CrewActions.LOAD_CREW_DONE:
        return action.payload;

      default:
        return state;
    }
  };
