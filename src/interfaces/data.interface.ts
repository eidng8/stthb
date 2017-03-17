/*
 *  @author  eidng8
 *  @license https://creativecommons.org/licenses/by-sa/4.0/
 *  @link    https://github.com/eidng8/stthb
 */

import { IMember } from './member.interface';
import { IMission } from './mission.interface';

/**
 * Server generated data definition
 */
export interface IServerData {
  /**
   * List of all characters
   */
  characters: string[];

  /**
   * List of all crew member.
   */
  crew: IMember[];

  /**
   * List of all episodes
   */
  episodes: string[];

  /**
   * The timestamp when this data is generated
   */
  generatedAt: number;

  /**
   * List of all missions
   */
  missions: IMission[];

  /**
   * List of all races
   */
  races: string[];

  /**
   * List of all skills
   */
  skills: string[];

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
