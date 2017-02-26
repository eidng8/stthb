/*
 *  @author  eidng8
 *  @license https://creativecommons.org/licenses/by-sa/4.0/
 *  @link    https://github.com/eidng8/stthb
 */

import { IStepCrew } from './step-crew.interface';

/**
 * Mission step data
 */
export interface IStep {
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
  crew: IStepCrew;
}
