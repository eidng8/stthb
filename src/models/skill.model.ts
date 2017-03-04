/*
 *  @author  eidng8
 *  @license https://creativecommons.org/licenses/by-sa/4.0/
 *  @link    https://github.com/eidng8/stthb
 */

import { ExceptionsMessages } from '../shared/exceptions';

export class SkillModel {
  /**
   * Name and abbreviation mappings
   */
  private static readonly map: any = {
    cmd:         ['cmd', 'command'],
    command:     ['cmd', 'command'],
    dip:         ['dip', 'diplomacy'],
    diplomacy:   ['dip', 'diplomacy'],
    eng:         ['eng', 'engineering'],
    engineering: ['eng', 'engineering'],
    med:         ['med', 'medicine'],
    medicine:    ['med', 'medicine'],
    sci:         ['sci', 'science'],
    science:     ['sci', 'science'],
    sec:         ['sec', 'security'],
    security:    ['sec', 'security'],
  };

  /**
   * Skill value, can be an integer, or an array with two integers.
   *
   * An array denotes a value range, with the first element as the lower bound,
   * and the second element as the upper bound.
   */
  value: number[];

  /**
   * The skill abbreviation
   */
  private _skill: string;

  /**
   * Returns the abbreviation of the given skill
   * @param skill
   */
  static toAbbr(skill: string): string {
    return SkillModel.map[skill][0];
  }

  /**
   * Returns the name of the given skill
   * @param skill
   */
  static toName(skill: string): string {
    return SkillModel.map[skill][1];
  }

  constructor(skill: string, value: number[]) {
    if(value.length != 3) {
      throw ExceptionsMessages.skills.value;
    }

    this.abbr = skill;
    this.value = value;
  }

  /**
   * Abbreviation of the instance.
   *
   * You can set it to name or abbreviation. It will always return abbreviation
   * when read.
   */
  get abbr(): string {
    return this._skill;
  }

  set abbr(value: string) {
    this._skill = SkillModel.map[value][0];
  }

  /**
   * Name of the instance.
   *
   * You can set it to name or abbreviation. It will always return name
   * when read.
   */
  get name(): string {
    return SkillModel.map[this._skill][1];
  }

  set name(value: string) {
    this._skill = SkillModel.map[value][1];
  }

  /**
   * The base skill value
   */
  get base(): number {
    return this.value[0];
  }

  /**
   * The lower limit of skill range
   */
  get lower(): number {
    return this.value[1];
  }

  /**
   * The upper limit of skill range
   */
  get upper(): number {
    return this.value[2];
  }
}
