/*
 *  @author  eidng8
 *  @license https://creativecommons.org/licenses/by-sa/4.0/
 *  @link    https://github.com/eidng8/stthb
 */

import { IServerData } from './server-data.interface';

/**
 * Server generated data definition
 */
export interface IDataModel<T> {
  load(data: T, server?: IServerData): void;
}
