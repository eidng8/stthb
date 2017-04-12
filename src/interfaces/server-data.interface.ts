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
  readonly characters: string[];

  /**
   * List of all crew member.
   */
  readonly crew: IMember[];

  /**
   * List of all episodes
   */
  readonly episodes: string[];

  /**
   * The timestamp when this data is generated
   */
  readonly generatedAt: number;

  /**
   * List of all missions
   */
  readonly missions: IMission[];

  /**
   * List of all races
   */
  readonly races: string[];

  /**
   * List of all skills
   */
  readonly skills: string[];

  /**
   * List of all traits
   *
   * Please note that, this list contains only traits that are actually
   * possessed by crew members. e.g. no one possesses the 'Rich' traits, so you
   * won't find it in this list.
   */
  readonly traits: string[];

  /**
   * Server data version
   */
  readonly version: number;
}
