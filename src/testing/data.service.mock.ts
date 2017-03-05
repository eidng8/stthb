/*
 *  @author  eidng8
 *  @license https://creativecommons.org/licenses/by-sa/4.0/
 *  @link    https://github.com/eidng8/stthb
 */

import { Observable } from 'rxjs/Observable';
import { IServerData } from '../interfaces/server-data.interface';
import { DataService } from '../shared/data.service';

export class MockDataService extends DataService {
  data: IServerData = require('../../www/data.json');  // tslint:disable-line

  constructor() {
    super(null);
  }

  /**
   * Pretend to fetch server data from local source.
   *
   * This mocked version takes a single parameter,
   * and return it as an Observable
   */
  protected getLocalData(): Observable<IServerData> {
    return Observable.of(arguments[0]);
  }
}

export const provideMockDataService: any = {
  provide:  DataService,
  useValue: new MockDataService(),
};
