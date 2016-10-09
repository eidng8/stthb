/**
 * Created by JC on 2016-07-09.
 */

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
