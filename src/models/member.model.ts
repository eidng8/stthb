/*
 *  @author  eidng8
 *  @license https://creativecommons.org/licenses/by-sa/4.0/
 *  @link    https://github.com/eidng8/stthb
 */

import { IDataModel } from '../interfaces/data-model.interface';
import { IMember } from '../interfaces/member.interface';
import { IServerData } from '../interfaces/server-data.interface';
import { ERarity } from '../shared/data.type';
import { MissionModel } from './mission.model';
import { SkillsModel } from './skills.model';

export class MemberModel implements IDataModel<IMember> {
  /**
   * Index value to the {@see IServerData.character} list.
   */
  character: string;

  /**
   * The crew member name.
   */
  name: string;

  /**
   * The thumbnail URL
   */
  picture: string[];

  /**
   * The portrait URL
   */
  portrait: string[];

  /**
   * Index value to the {@see IServerData.races} list.
   */
  race: string;

  /**
   * List of all skills with values at maximum level and fully equipped.
   */
  skills: SkillsModel;

  /**
   * Number of stars (rarity)
   */
  stars: number;

  /**
   * List of all possessed traits.
   *
   * Index value to the {@see IServerData.traits} list.
   */
  traits: string[];

  /**
   * List of all mission steps capable of
   */
  missions: {
    critical?: {[key: number]: {mission: MissionModel, steps: number[]}};
    pass?: {[key: number]: {mission: MissionModel, steps: number[]}};
    unlock?: {[key: number]: {mission: MissionModel, steps: number[]}};
  } = {};

  get rarity(): string {
    return ERarity[this.stars];
  }

  load(member: IMember, server: IServerData): void {
    this.character = server.characters[member.character];
    this.name = member.name;
    this.picture = member.picture;
    this.race = server.races[member.race];
    this.stars = member.stars;
    this.traits = member.traits.map(trait => server.traits[trait]);
    this.skills = new SkillsModel();
    this.skills.load(member.skills, server);
  }
}
