/*
 *  @author  eidng8
 *  @license https://creativecommons.org/licenses/by-sa/4.0/
 *  @link    https://github.com/eidng8/stthb
 */

import { Moment } from 'moment';
import { MemberModel } from '../models/member.model';
import { MissionModel } from '../models/mission.model';
import { ISkill } from './skills.interface';

/**
 * Server generated data definition
 */
export interface IData {
  /**
   * List of all characters
   */
  characters: string[];

  /**
   * List of all crew member.
   */
  crew: MemberModel[];

  /**
   * List of all episodes
   */
  episodes: string[];

  /**
   * The timestamp when this data is generated
   */
  generatedAt: Moment;

  /**
   * List of all missions
   */
  missions: MissionModel[];

  /**
   * List of all races
   */
  races: string[];

  /**
   * List of all skills
   */
  skills: ISkill[];

  /**
   * List of all traits
   *
   * Please note that, this list contains only traits that are actually
   * possessed by crew members. e.g. no one possesses the 'Rich' traits, so you
   * won't find it in this list.
   */
  traits: string[];

  /**
   * Server data version
   */
  version: number;
}
