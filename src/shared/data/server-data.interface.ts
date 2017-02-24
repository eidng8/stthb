/*
 *  @author  eidng8
 *  @license https://creativecommons.org/licenses/by-sa/4.0/
 *  @link    https://github.com/eidng8/stthb
 */

import { EMissionType } from './data.type';

/**
 * Crew member data
 */
export interface ICrewMember {
  /**
   * Index value to the {@see IServerData.character} list.
   */
  character: number;

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
  skills: ISkills;

  /**
   * Number of stars (rarity)
   */
  stars: number;

  /**
   * List of all possessed traits.
   *
   * Index value to the {@see IServerData.traits} list.
   */
  traits: number[];
}

/**
 * Mission data
 */
export interface IMission {
  /**
   * Mission cost (in chronitons).
   *
   * This is a 3-element array corresponding to 3 difficulties.
   */
  cost: number[];

  /**
   * The episode the mission belongs to.
   *
   * It's the index value to the {@see IServerData.episodes} list.
   */
  episode: number;

  /**
   * Mission name
   */
  name: string;

  /**
   * Mission type
   */
  type: EMissionType;

  /**
   * List of mission steps
   */
  steps?: IMissionStep[];
}

/**
 * Crew member index list, who can solve specific mission steps
 */
export interface IMissionStepCrew {
  /**
   * List of all crew that can achieve critical success.
   *
   * All values are index to the {@see IServerData.crew} list.
   */
  critical?: number[];

  /**
   * List of all crew that can pass the step.
   *
   * All values are index to the {@see IServerData.crew} list.
   */
  pass?: number[];

  /**
   * List of all crew that can unlock the step.
   *
   * All values are index to the {@see IServerData.crew} list.
   */
  unlock?: number[];
}

/**
 * Mission step data
 */
export interface IMissionStep {
  /**
   * How much bonus can a mission step gain from traits.
   *
   * These are 2-dimension arrays. First level corresponds to step alternative,
   * and second level are bonus values.
   */
  bonus: number[][];

  /**
   * Mission step lock traits.
   *
   * These are 2-dimension arrays. First level corresponds to step alternative,
   * and second level are index values to the {@see IServerData.traits} list.
   */
  locks?: number[][];

  /**
   * Mission step skill requirement.
   *
   * These are 2-dimension arrays. First level corresponds to step alternative,
   * and second level are 3-element array corresponding to 3 difficulties.
   */
  req: number[][];

  /**
   * Skills used by mission step.
   *
   * This is an array, with each element corresponds to a step alternative.
   */
  skills?: number[];

  /**
   * Mission step bonus traits.
   *
   * These are 2-dimension arrays. First level corresponds to step alternative,
   * and second level are index values to the {@see IServerData.traits} list.
   */
  traits?: number[][];

  /**
   * List of all crew that can solve the mission step.
   */
  crew: IMissionStepCrew;
}

/**
 * List of acquired skills and corresponding value.
 *
 * The keys are index to the {@see IServerData.skills} list.
 */
export interface ISkills {
  [key: number]: number;
}

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
  crew: ICrewMember[];

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
