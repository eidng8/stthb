/**
 * Created by JC on 2016-07-27.
 */

import {IBaseData} from './base-data';
import {ICrew} from './crew';


export enum EMissionTypes
{
  away = 1, battle, cadet
}

export enum EDifficulties
{
  normal = 1, elite, epic
}

export interface IMission extends IBaseData
{
  uri:string;
  type:EMissionTypes;
  cost:number[];
  requirement?:number[];
  skills?:string[];
  locks?:string[];
  steps?:IStep[];
  crew?:ICrew[];
}

export interface IStep
{
  name:string;
  choices:IChoice[];
}

export interface IChoice
{
  name:string;
  skill:string[];
  locks?:string[];
}
