/*
 *  @author  eidng8
 *  @license https://creativecommons.org/licenses/by-sa/4.0/
 *  @link    https://github.com/eidng8/stthb
 */

import { EMissionType } from './data.types';

/**
 * Crew member data
 */
export interface ICrewMember {
  character: string;
  name: string;
  picture: string;
  race: string;
  skills: ISkills;
  stars: number;
  traits: number[];
}

/**
 * Mission data
 */
export interface IMission {
  cost: number[];
  episode: number;
  name: string;
  type: EMissionType;
  steps?: IMissionStep[];
}

/**
 * Crew member index list, who can solve specific mission steps
 */
export interface IMissionCrew {
  critical?: number[];
  pass?: number[];
  unlock?: number[];
}

/**
 * Mission step data
 */
export interface IMissionStep {
  bonus: number[][];
  locks?: number[][];
  req: number[][];
  skills?: number[];
  traits?: number[][];
  crew: IMissionCrew;
}

/**
 * List of acquired skills and corresponding value
 */
export interface ISkills {
  [key: number]: number;
}

/**
 * Server generated data definition
 */
export interface IServerData {
  characters: string[];
  crew: ICrewMember[];
  episodes: string[];
  generatedAt: number;
  missions: IMission[];
  races: string[];
  skills: string[];
  traits: string[];
  version: number;
}
