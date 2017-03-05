/*
 *  @author  eidng8
 *  @license https://creativecommons.org/licenses/by-sa/4.0/
 *  @link    https://github.com/eidng8/stthb
 */

import forOwn from 'lodash-es/forOwn';
import { Injectable } from '@angular/core';
import { DataService } from './data.service';
import { IMember } from '../interfaces/member.interface';
import { MemberModel } from '../models/member.model';
import { TSkills, SkillsModel } from '../models/skills.model';

@Injectable()
export class Factory {
  /**
   * Server data
   */
  private server: DataService;

  constructor(data: DataService) {
    this.server = data;
  }

  /**
   * Create a {@see MemberModel} instance
   */
  member(data: IMember): MemberModel {
    const model: MemberModel = new MemberModel();
    model.character = this.server.characters[data.character];
    model.name = data.name;
    model.picture = data.picture;
    model.race = this.server.races[data.race];
    model.skills = this.skills(data.skills);
    model.stars = data.stars;
    model.traits = data.traits.map(trait => this.server.traits[trait]);
    return model;
  }

  /**
   * Create a {@see SkillsModel} instance
   */
  skills(skills: TSkills): SkillsModel {
    const model: SkillsModel = new SkillsModel();
    forOwn<TSkills>(skills, (values, key) => {
      try {
        model.set(this.server.skills[key], values);
      } catch(e) {
        console.warn(e.message);
      }
    });
    return model;
  }

}
