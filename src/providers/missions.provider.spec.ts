/*
 *  @author  eidng8
 *  @license https://creativecommons.org/licenses/by-sa/4.0/
 *  @link    https://github.com/eidng8/stthb
 */

import { TestBed, inject } from '@angular/core/testing';
import { provideMockDataService } from '../testing/data.service.mock';
import { Factory } from '../shared/factory';
import { DataService } from '../shared/data.service';
import { MissionsProvider } from './missions.provider';

describe('Missions Provider:', () => {

  beforeEach(() => {
    TestBed.configureTestingModule(
      {
        providers: [
          provideMockDataService(),
          Factory,
          MissionsProvider,
        ],
      });
  });

  it('can be injected', inject([MissionsProvider],
    (missions: MissionsProvider) => {
      expect(missions).toBeDefined();
    }));

  it('should fetch & store local data', inject([MissionsProvider, DataService],
    (missions: MissionsProvider, server: DataService) => {
      expect(missions.all.length).toBe(server.missions.length);
    }));
});
