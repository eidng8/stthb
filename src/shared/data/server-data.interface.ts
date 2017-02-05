/*
 *  @author  eidng8
 *  @license https://creativecommons.org/licenses/by-sa/4.0/
 *  @link    https://github.com/eidng8/stthb
 */

import { EMissionType } from './data.types';

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
  skills?: string[];
  traits?: string[];
  locks?: string[];
  crew: IMissionCrew;
}

/**
 * Mission data
 */
export interface IMission {
  name: string;
  episode: number;
  type: EMissionType;
  cost: number[];
  steps?: IMissionStep[];
  requirement: number[];
  bonus: number[];
}

/**
 * List of acquired skills and corresponding value
 */
export interface ISkills {
  cmd?: number;
  dip?: number;
  eng?: number;
  med?: number;
  sci?: number;
  sec?: number;
}

/**
 * Crew member data
 */
export interface ICrewMember {
  stars: number;
  character: string;
  name: string;
  picture: string;
  race: string;
  skills: ISkills;
  traits: string[];
}

/**
 * Server generated data definition
 */
export interface IServerData {
  version: number;
  missions: {[key: number]: string[]|IMission[]};
  crew: ICrewMember[];
}
