/*
 *  @author  eidng8
 *  @license https://creativecommons.org/licenses/by-sa/4.0/
 *  @link    https://github.com/eidng8/stthb
 */

import forOwn from 'lodash-es/forOwn';
import { SkillModel } from './skill.model';
import { IServerData } from '../interfaces/server-data.interface';
import { IDataModel } from '../interfaces/data-model.interface';

export type TSkills = {[key: number]: number[]};

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

  protected _all: SkillModel[] = [];

  // region Properties

  get all(): SkillModel[] {
    if(this._all.length < 1) {
      this.each(skill => {
        this._all.push(skill);
      });
    }
    return this._all;
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

  each(func: (skill: SkillModel, abbr: string) => boolean|void): boolean {
    let found: boolean = false;
    for(const abbr of SkillsModel.list) {
      const skill: SkillModel = this[`_${abbr}`];
      if(!skill) {
        continue;
      }
      found = true;
      if(false === func(skill, abbr)) {
        break;
      }
    }
    return found;
  }

  protected createModel(skill: string, value: number[]): SkillModel {
    return new SkillModel(skill, value);
  }

  load(skills: TSkills, server: IServerData): void {
    forOwn<TSkills>(skills, (values, key) => {
      try {
        this.set(server.skills[key], values);
      }
      catch(e) {
        console.warn(e.message);
      }
    });
  }
}
