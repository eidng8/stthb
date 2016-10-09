/**
 * Created by JC on 2016-10-05.
 */

import {Injectable} from '@angular/core';
import {Action} from '@ngrx/store';
import {CrewMember} from '../../models';

@Injectable()
export class CrewActions
{
  public static LOADING_START:string = 'LOADING_START';
  public static LOADING_DONE:string = 'LOADING_DONE';
  public static LOADING_CANCEL:string = 'LOADING_CANCEL';

  public static LOAD_CREW:string = 'LOAD_CREW';
  public static LOAD_CREW_DONE:string = 'LOAD_CREW_DONE';
  public static LOAD_CREW_FAILED:string = 'LOAD_CREW_FAILED';

  public static LOAD_MISSION_AWAY:string = 'LOAD_MISSION_AWAY';
  public static LOAD_MISSION_AWAY_DONE:string = 'LOAD_MISSION_AWAY_DONE';
  public static LOAD_MISSION_AWAY_FAILED:string = 'LOAD_MISSION_AWAY_FAILED';

  public static LOAD_MISSION_CADET:string = 'LOAD_MISSION_CADET';
  public static LOAD_MISSION_CADET_DONE:string = 'LOAD_MISSION_CADET_DONE';
  public static LOAD_MISSION_CADET_FAILED:string = 'LOAD_MISSION_CADET_FAILED';

  public static ADD_FILTER:string = 'ADD_FILTER';
  public static DEL_FILTER:string = 'DEL_FILTER';

  public loadingStart():Action
  {
    return {type: CrewActions.LOADING_START};
  }

  public loadingDone():Action
  {
    return {type: CrewActions.LOADING_DONE};
  }

  public loadingCancel():Action
  {
    return {type: CrewActions.LOADING_CANCEL};
  }

  public loadCrew():Action
  {
    return {type: CrewActions.LOAD_CREW};
  }

  public loadCrewDone(data:CrewMember):Action
  {
    return {
      payload: data,
      type:    CrewActions.LOAD_CREW_DONE,
    };
  }

  public loadCrewFailed():Action
  {
    return {type: CrewActions.LOAD_CREW_FAILED};
  }
}
