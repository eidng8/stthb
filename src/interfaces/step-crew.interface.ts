/*
 *  @author  eidng8
 *  @license https://creativecommons.org/licenses/by-sa/4.0/
 *  @link    https://github.com/eidng8/stthb
 */

/**
 * Crew member index list, who can solve specific mission steps
 */
export interface IStepCrew {
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
