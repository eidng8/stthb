/*
 *  @author  eidng8
 *  @license https://creativecommons.org/licenses/by-sa/4.0/
 *  @link    https://github.com/eidng8/stthb
 */

import { IDataModel } from '../interfaces/data-model.interface';
import { IMember } from '../interfaces/member.interface';
import { DataService } from '../shared/data.service';
import { ERarity } from '../shared/data.type';
import { MissionModel } from './mission.model';
import { SkillsModel } from './skills.model';

export type TMemberMissionType = {
  [key: number]: { mission: MissionModel, steps: number[] };
};

export type TMemberMissions = {
  critical?: TMemberMissionType;
  pass?: TMemberMissionType;
  unlock?: TMemberMissionType;
};

export class MemberModel implements IDataModel<IMember> {

  protected dataService: DataService;

  // region Private fields

  /**
   * Index value to the {@see IServerData.character} list.
   */
  private _character: number;

  /**
   * List of all mission steps capable of
   */
  private _missions: TMemberMissions = {};

  /**
   * The crew member name.
   */
  private _name: string;

  /**
   * The thumbnail URL
   */
  private _picture: string[];

  /**
   * The portrait URL
   */
  private _portrait: string[];

  /**
   * Index value to the {@see IServerData.races} list.
   */
  private _race: number;

  /**
   * List of all skills with values at maximum level and fully equipped.
   */
  private _skills: SkillsModel;

  /**
   * Number of stars (rarity)
   */
  private _stars: number;

  /**
   * List of all possessed traits.
   *
   * Index value to the {@see IServerData.traits} list.
   */
  private _traits: number[];

  // endregion

  // region Public readonly properties

  get character(): string {
    return this.dataService.characters[this._character];
  }

  get missions(): TMemberMissions {
    return this._missions;
  }

  get name(): string {
    return this._name;
  }

  get picture(): string[] {
    return this._picture;
  }

  get portrait(): string[] {
    return this._portrait;
  }

  get race(): string {
    return this.dataService.races[this._race];
  }

  get rarity(): string {
    return ERarity[this._stars];
  }

  get skills(): SkillsModel {
    return this._skills;
  }

  get stars(): number {
    return this._stars;
  }

  /**
   * List of all possessed traits.
   *
   * NOTE: Do not call this property in quick succession.
   * Use temporary variable instead.
   */
  get traits(): string[] {
    return this._traits.map(trait => this.dataService.traits[trait]);
  }

  // endregion

  load(member: IMember, data: DataService): void {
    this._character = member.character;
    this._name      = member.name;
    this._picture   = member.picture;
    this._race      = member.race;
    this._stars     = member.stars;
    this._traits    = member.traits;
    this._skills    = new SkillsModel();
    this._skills.load(member.skills, data);
  }
}
