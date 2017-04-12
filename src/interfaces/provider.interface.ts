/*
 *  @author  eidng8
 *  @license https://creativecommons.org/licenses/by-sa/4.0/
 *  @link    https://github.com/eidng8/stthb
 */

import { DataService } from '../shared/data.service';

export interface IProvider<T> {

  /**
   * An array of all parsed records
   */
  readonly all: T[];

  /**
   * Total number of records
   */
  readonly count: number;

  /**
   * Load records from the given server data
   */
  load: (data: any[], svc: DataService) => void;

  /**
   * Get a record by index
   */
  get: (idx: number) => T;

  /**
   * Get a record by name
   */
  named: (name: string) => T;
}
