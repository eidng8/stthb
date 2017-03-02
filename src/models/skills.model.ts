/*
 *  @author  eidng8
 *  @license https://creativecommons.org/licenses/by-sa/4.0/
 *  @link    https://github.com/eidng8/stthb
 */

import { ISkills } from '../interfaces/skills.interface';
import { SkillModel } from './skill.model';

export type TSkills = {[key: number]: number|number[]};

export class SkillsModel implements ISkills {

  private _cmd: boolean|SkillModel = false;
  private _dip: boolean|SkillModel = false;
  private _eng: boolean|SkillModel = false;
  private _med: boolean|SkillModel = false;
  private _sci: boolean|SkillModel = false;
  private _sec: boolean|SkillModel = false;

  get cmd(): number|number[] {
    if(this._cmd instanceof SkillModel) {
      return this._cmd.value;
    }
    return undefined;
  }

  set cmd(value: number|number[]) {
    if(this._cmd instanceof SkillModel) {
      this._cmd.value = value;
    }
    this._cmd = this.createModel('cmd', value);
  }

  get dip(): number|number[] {
    if(this._dip instanceof SkillModel) {
      return this._dip.value;
    }
    return undefined;
  }

  set dip(value: number|number[]) {
    if(this._dip instanceof SkillModel) {
      this._dip.value = value;
    }
    this._dip = this.createModel('dip', value);
  }

  get eng(): number|number[] {
    if(this._eng instanceof SkillModel) {
      return this._eng.value;
    }
    return undefined;
  }

  set eng(value: number|number[]) {
    if(this._eng instanceof SkillModel) {
      this._eng.value = value;
    }
    this._eng = this.createModel('eng', value);
  }

  get med(): number|number[] {
    if(this._med instanceof SkillModel) {
      return this._med.value;
    }
    return undefined;
  }

  set med(value: number|number[]) {
    if(this._med instanceof SkillModel) {
      this._med.value = value;
    }
    this._med = this.createModel('med', value);
  }

  get sci(): number|number[] {
    if(this._sci instanceof SkillModel) {
      return this._sci.value;
    }
    return undefined;
  }

  set sci(value: number|number[]) {
    if(this._sci instanceof SkillModel) {
      this._sci.value = value;
    }
    this._sci = this.createModel('sci', value);
  }

  get sec(): number|number[] {
    if(this._sec instanceof SkillModel) {
      return this._sec.value;
    }
    return undefined;
  }

  set sec(value: number|number[]) {
    if(this._sec instanceof SkillModel) {
      this._sec.value = value;
    }
    this._sec = this.createModel('sec', value);
  }

  protected createModel(skill: string, value: number|number[]): SkillModel {
    return new SkillModel(skill, value);
  }
}
