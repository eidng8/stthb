/*
 *  @author  eidng8
 *  @license https://creativecommons.org/licenses/by-sa/4.0/
 *  @link    https://github.com/eidng8/stthb
 */

import { DataService } from '../shared/data.service';

export interface IProvider {
  all: any[];
  count: number;
  load: (server: DataService) => void;
}
