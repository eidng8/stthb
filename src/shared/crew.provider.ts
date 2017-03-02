/*
 *  @author  eidng8
 *  @license https://creativecommons.org/licenses/by-sa/4.0/
 *  @link    https://github.com/eidng8/stthb
 */

import each from 'lodash-es/each';
import forOwn from 'lodash-es/forOwn';
import { DataService } from './data.service';
import { MemberModel } from '../models/member.model';
import { IMember } from '../interfaces/member.interface';
import { TSkills, SkillsModel } from '../models/skills.model';

/**
 * Fundamental crew data processing features
 */
export class CrewProvider {

  constructor(private _data: DataService) {
  }

  each(func: (member: MemberModel, index: number) => void): void {
    each(this._data.crew, (data: IMember, idx: number) => {
      func(this.model(data), idx);
    });
  }

  private model(data: IMember): MemberModel {
    const model: MemberModel = new MemberModel();
    model.character = this._data.characters[data.character];
    model.name = data.name;
    model.picture = data.picture;
    model.race = this._data.races[data.race];
    model.skills = this.loadSkills(data.skills);
    model.stars = data.stars;
    model.traits = data.traits.map(trait => this._data.traits[trait]);
    return model;
  }

  private loadSkills(skills: TSkills): SkillsModel {
    const model: SkillsModel = new SkillsModel();
    forOwn(skills, (values, key) => {
      if(!Array.isArray(values) || values.length != 3) {
        console.warn('Invalid skill values', values, `for key ${key}`);
      } else {
        model[this._data.skills[key]] = values;
      }
    });
    return model;
  }

}
