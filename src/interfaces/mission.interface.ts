/*
 *  @author  eidng8
 *  @license https://creativecommons.org/licenses/by-sa/4.0/
 *  @link    https://github.com/eidng8/stthb
 */

import { EMissionType } from '../shared/data.type';
import { IStep } from './step.interface';

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
  steps?: IStep[];
}
