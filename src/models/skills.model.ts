/*
 *  @author  eidng8
 *  @license https://creativecommons.org/licenses/by-sa/4.0/
 *  @link    https://github.com/eidng8/stthb
 */

import findIndex from 'lodash-es/findIndex';
import forOwn from 'lodash-es/forOwn';
import { IDataModel } from '../interfaces/data-model.interface';
import { DataService } from '../shared/data.service';
import { SkillModel } from './skill.model';

export type TSkills = { [key: number]: number[] };

export class SkillsModel implements IDataModel<TSkills> {

  /**
   * List of all skill abbreviations
   */
  static list: string[] = ['cmd', 'dip', 'eng', 'med', 'sci', 'sec'];

  protected _cmd: SkillModel = undefined;
  protected _dip: SkillModel = undefined;
  protected _eng: SkillModel = undefined;
  protected _med: SkillModel = undefined;
  protected _sci: SkillModel = undefined;
  protected _sec: SkillModel = undefined;

  protected sorted: SkillModel[] = [];

  protected _primary: SkillModel;

  // region Public readonly properties

  get all(): SkillModel[] {
    return this.sorted;
  }

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

  get primary(): SkillModel {
    return this._primary;
  }

  // endregion

  get(skill: string): SkillModel {
    return this[`_${skill}`];
  }

  set(skill: string | SkillModel, values: number[] = undefined): void {
    let abbr: string;

    if (skill instanceof SkillModel) {
      abbr       = `_${skill.abbr}`;
      this[abbr] = skill;
      return;
    }

    const model: SkillModel = this.createModel(skill, values);
    abbr                    = `_${model.abbr}`;
    this[abbr]              = model;

    if (!this._primary || this[abbr].base > this._primary.base) {
      this._primary = this[abbr];
    }

    if (!this.sorted) {
      this.sorted.push(this[abbr]);
    }
    else {
      const idx: number = findIndex(this.sorted, sk => sk.abbr === this[abbr]);
      if (idx < 0) {
        this.sorted.push(this[abbr]);
      }
      else {
        this.sorted[idx] = this[abbr];
      }
      this.sorted.sort((s1, s2) => s2.base - s1.base);
    }

  }

  load(skills: TSkills, data: DataService): void {
    forOwn<TSkills>(skills, (values, key) => {
      try {
        this.set(data.skills[key], values);
      } catch (e) {
        console.warn(e.message);
      }
    });
  }

  protected createModel(skill: string, value: number[]): SkillModel {
    return new SkillModel(skill, value);
  }
}
