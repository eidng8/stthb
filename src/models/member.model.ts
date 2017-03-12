/*
 *  @author  eidng8
 *  @license https://creativecommons.org/licenses/by-sa/4.0/
 *  @link    https://github.com/eidng8/stthb
 */

import { SkillsModel } from './skills.model';
import { ERarity } from '../shared/data.type';

export class MemberModel {
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
  picture: string;

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

  get rarity(): string {
    return ERarity[this.stars];
  }
}
