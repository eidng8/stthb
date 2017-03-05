/*
 *  @author  eidng8
 *  @license https://creativecommons.org/licenses/by-sa/4.0/
 *  @link    https://github.com/eidng8/stthb
 */

import { TestBed, inject } from '@angular/core/testing';
import { provideMockDataService } from '../testing/data.service.mock';
import { Factory } from '../shared/factory';
import { CrewProvider } from './crew.provider';
import { DataService } from '../shared/data.service';

describe('Crew Provider:', () => {

  beforeEach(() => {
    TestBed.configureTestingModule(
      {
        providers: [
          provideMockDataService,
          Factory,
          CrewProvider,
        ],
      });
  });

  it('can be injected', inject([CrewProvider], (crew: CrewProvider) => {
    expect(crew).toBeDefined();
  }));

  it('should fetch & store local data', inject([CrewProvider, DataService],
    (crew: CrewProvider, server: DataService) => {
      expect(crew.all.length).toBe(server.crew.length);
    }));
});
