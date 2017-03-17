/*
 *  @author  eidng8
 *  @license https://creativecommons.org/licenses/by-sa/4.0/
 *  @link    https://github.com/eidng8/stthb
 */

import { Observable } from 'rxjs/Observable';
import { IServerData } from '../interfaces/server-data.interface';
import { DataService } from '../shared/data.service';

export type TDataCustomizer = (data: IServerData) => void;

export class MockDataService extends DataService {

  data: IServerData;

  protected loaded: boolean = true;

  constructor(mockData: IServerData, ...customizer: TDataCustomizer[]) {
    super(null);
    this.data = mockData;
    if(customizer) {
      customizer.forEach(func => func(this.data));
    }
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

export function provideMockDataService(mockData: IServerData,
  ...customizer: TDataCustomizer[]): any {
  return {
    provide:  DataService,
    useValue: new MockDataService(mockData, ...customizer),
  };
}

export function trimCrew(data: IServerData): void {
  data.crew = data.crew.slice(0, 50);
}
