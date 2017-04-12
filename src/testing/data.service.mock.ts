/*
 *  @author  eidng8
 *  @license https://creativecommons.org/licenses/by-sa/4.0/
 *  @link    https://github.com/eidng8/stthb
 */

import { IServerData } from '../interfaces/server-data.interface';
import { CrewProvider } from '../providers/crew.provider';
import { MissionsProvider } from '../providers/missions.provider';
import { DataService } from '../shared/data.service';

export type TDataCustomizer = (data: IServerData) => IServerData;

export class MockDataService extends DataService {

  data: IServerData;

  protected loaded: boolean = true;

  constructor(mockData: IServerData, crew: CrewProvider,
              missions: MissionsProvider, ...customizer: TDataCustomizer[]) {
    super(null, crew, missions);
    this.data = mockData;
    if (customizer) {
      customizer.forEach(func => {
        this.data = func(this.data);
      });
    }
  }
}

export function provideMockDataService(
  mockData: IServerData, ...customizer: TDataCustomizer[]): any {
  return {
    deps:       [CrewProvider, MissionsProvider],
    provide:    DataService,
    useFactory: (crew: CrewProvider, missions: MissionsProvider) => {
      return new MockDataService(mockData, crew, missions, ...customizer);
    },
  };
}

export function trimCrew(data: IServerData): IServerData {
  let touched: any = Object.assign({}, data);
  touched.crew     = touched.crew.slice(0, 50);
  return touched;
}
