/**
 * Created by JC on 2016-10-07.
 */

export const MAX_STARS:number = 5;

export interface IFilters
{
  /**
   * Crew star (rarity, 0 to MAX_STARS - 1)
   */
  stars:number[] | null;

  /**
   * Crew skills (cmd, dip, eng, med, sci, sec)
   */
  skills:string[] | null;

  /**
   * Crew traits
   */
  traits:string[] | null;

  /**
   * Mission difficulties (Normal, Elite, Epic)
   */
  difficulties:string[] | null;
}

export const initialFilters:IFilters = {
  difficulties: null,
  skills:       null,
  stars:        null,
  traits:       null,
};
