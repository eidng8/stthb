/**
 * Created by JC on 2016-10-05.
 */

import {Injectable} from '@angular/core';
import {Action} from '@ngrx/store';

@Injectable()
export class FilterActions
{
  public static RESET_FILTER:string = 'RESET_FILTER';

  public static ADD_STAR_FILTER:string = 'ADD_STAR_FILTER';
  public static DEL_STAR_FILTER:string = 'DEL_STAR_FILTER';
  public static RESET_STAR_FILTER:string = 'RESET_STAR_FILTER';
  public static ADD_SKILL_FILTER:string = 'ADD_SKILL_FILTER';

  public resetFilter():Action
  {
    return {
      type: FilterActions.RESET_FILTER,
    };
  }

  public addStarFilter(filter:number[]):Action
  {
    return {
      payload: filter,
      type:    FilterActions.ADD_STAR_FILTER,
    };
  }

  public delStarFilter(filter:number[]):Action
  {
    return {
      payload: filter,
      type:    FilterActions.DEL_STAR_FILTER,
    };
  }

  public resetStarFilter():Action
  {
    return {
      type: FilterActions.RESET_STAR_FILTER,
    };
  }

  public addSkillFilter(filter:string[]):Action
  {
    return {
      payload: filter,
      type:    FilterActions.ADD_SKILL_FILTER,
    };
  }
}
