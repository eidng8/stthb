/**
 * Created by JC on 2016-07-09.
 */

import {IBaseData} from './base-data';

/**
 * List of skill abbreviations
 */
export const SKILLS:string[] = ['cmd', 'dip', 'eng', 'med', 'sci', 'sec'];

/**
 * List of skill names
 */
export const SKILL_NAMES:string[] = [
  'command', 'diplomacy', 'engineering', 'medicine', 'science', 'security',
];

/**
 * All skill arrays are 2-dimensional, with first as star, and second as level.
 */
export interface ISkills
{
  cmd?:number[][];
  dip?:number[][];
  eng?:number[][];
  med?:number[][];
  sci?:number[][];
  sec?:number[][];
}

/**
 * Crew member data. It was originally called ICrew, and changed to current
 * name to avoid confusion. The word `crew` is plural while this piece of data
 * represents only a single crew member.
 */
export interface ICrewMember extends IBaseData
{
  uri:string;
  picture:string;
  character:string;
  stars:number;
  skills:ISkills;
  race:string;
  traits:string[];
}
