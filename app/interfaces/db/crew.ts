/**
 * Created by JC on 2016-07-09.
 */

import {IBaseData} from '../base-data';

/**
 * Constant that list out all skills found in data, by abbreviations and names.
 */
export const SKILLS:any = {
  list: {
    abbr:  ['cmd', 'dip', 'eng', 'med', 'sci', 'sec'],
    names: [
      'command', 'diplomacy', 'engineering', 'medicine', 'science', 'security',
    ],
  },

  // tslint:disable-next-line:object-literal-sort-keys
  abbr: {
    cmd: 'command',
    dip: 'diplomacy',
    eng: 'engineering',
    med: 'medicine',
    sci: 'science',
    sec: 'security',
  },

  command:     'cmd',
  diplomacy:   'dip',
  engineering: 'eng',
  medicine:    'med',
  science:     'sci',
  security:    'sec',
};

/**
 * Crew data structure as stored in database.
 *
 * All skill arrays are 2-dimensional, with first as star, and second as level.
 */
export interface IDBCrew extends IBaseData
{
  /**
   * URI to the wiki page
   */
  uri:string;

  /**
   * URI to the portrait picture
   */
  picture:string;

  /**
   * Original TV Character
   */
  character:string;

  /**
   * Rarity
   */
  stars:number;

  /**
   * Command skills
   */
  cmd?:number[][];

  /**
   * Diplomacy skills
   */
  dip?:number[][];

  /**
   * Engineer skills
   */
  eng?:number[][];

  /**
   * Medicine skills
   */
  med?:number[][];

  /**
   * Science skills
   */
  sci?:number[][];

  /**
   * Security skills
   */
  sec?:number[][];

  /**
   * Race
   */
  race:string;

  /**
   * Traits
   */
  traits:string[];
}
