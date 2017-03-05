/*
 *  @author  eidng8
 *  @license https://creativecommons.org/licenses/by-sa/4.0/
 *  @link    https://github.com/eidng8/stthb
 */

import { SkillModel } from './skill.model';

export type TSkills = {[key: number]: number[]};

export class SkillsModel {

  protected _cmd: SkillModel = undefined;
  protected _dip: SkillModel = undefined;
  protected _eng: SkillModel = undefined;
  protected _med: SkillModel = undefined;
  protected _sci: SkillModel = undefined;
  protected _sec: SkillModel = undefined;

  // region Properties

  get cmd(): SkillModel {
    return this.get('cmd');
  }

  get dip(): SkillModel {
    return this.get('dip');
  }

  get eng(): SkillModel {
    return this.get('eng');
  }

  get med(): SkillModel {
    return this.get('med');
  }

  get sci(): SkillModel {
    return this.get('sci');
  }

  get sec(): SkillModel {
    return this.get('sec');
  }

  // endregion

  get(skill: string): SkillModel {
    return this[`_${skill}`];
  }

  set(skill: string|SkillModel, values: number[] = undefined): void {
    if(skill instanceof SkillModel) {
      this[`_${skill.abbr}`] = skill;
      return;
    }

    const model: SkillModel = this.createModel(skill, values);
    this[`_${model.abbr}`] = model;
  }

  protected createModel(skill: string, value: number[]): SkillModel {
    return new SkillModel(skill, value);
  }
}
