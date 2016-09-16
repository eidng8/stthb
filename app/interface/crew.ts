/**
 * Created by JC on 2016-07-09.
 */

import {IBaseData} from './base-data';

export const SKILLS:any = {
  list: {
    abbr: ['cmd', 'dip', 'eng', 'med', 'sci', 'sec'], names: [
      'command', 'diplomacy', 'engineering', 'medicine', 'science', 'security'
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

export interface ICrew extends IBaseData
{
  uri:string;
  picture:string;
  character:string;
  stars:number;
  cmd?:number[];
  dip?:number[];
  eng?:number[];
  med?:number[];
  sci?:number[];
  sec?:number[];
  race:string;
  traits:string[];
  [key:string]:number|string|number[]|string[];
}
