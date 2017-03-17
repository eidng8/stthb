/*
 *  @author  eidng8
 *  @license https://creativecommons.org/licenses/by-sa/4.0/
 *  @link    https://github.com/eidng8/stthb
 */

/**
 * Skill name & abbr
 */
export interface ISkill {
  ordinate: number;
  abbr: string;
  name: string;
}

/**
 * List of acquired skills and corresponding value.
 *
 * The keys are index to the {@see IServerData.skills} list.
 */
export interface ISkills {
  /**
   * Command skill
   */
  cmd?: number|number[];

  /**
   * Diplomacy skill
   */
  dip?: number|number[];

  /**
   * Engineering skill
   */
  eng?: number|number[];

  /**
   * Medicine skill
   */
  med?: number|number[];

  /**
   * Science skill
   */
  sci?: number|number[];

  /**
   * Security skill
   */
  sec?: number|number[];
}
