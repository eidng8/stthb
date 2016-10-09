/**
 * Created by JC on 2016-10-07.
 */

import {ICrewMember} from '../../models';
import {IFilters, initialFilters} from './filter.model';

export interface IAppState
{
  crew:ICrewMember[];
  filters:IFilters;
}

export const initialAppState:IAppState =
{
  crew:    <ICrewMember[]>[],
  filters: initialFilters,
};
