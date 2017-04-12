/*
 *  @author  eidng8
 *  @license https://creativecommons.org/licenses/by-sa/4.0/
 *  @link    https://github.com/eidng8/stthb
 */

import {
  Http,
  BaseRequestOptions,
  ResponseOptions,
  Response,
  BaseResponseOptions
} from '@angular/http';
import { TestBed, inject, fakeAsync } from '@angular/core/testing';
import { MockBackend } from '@angular/http/testing';
import { DataService } from './data.service';
import { CrewProvider } from '../providers/crew.provider';
import { MissionsProvider } from '../providers/missions.provider';

describe('Data Service:', () => {

  let responseOptions: ResponseOptions = new BaseResponseOptions();
  const fixtureData: any = require('../testing/mission-test.data.json');  // tslint:disable-line
  responseOptions = responseOptions.merge({body: JSON.stringify(fixtureData)});

  beforeEach(() => {
    TestBed.configureTestingModule(
      {
        providers: [
          MockBackend,
          BaseRequestOptions,
          CrewProvider,
          MissionsProvider,
          DataService,
          {
            deps:       [MockBackend, BaseRequestOptions],
            provide:    Http,
            useFactory: (backend: MockBackend, options: BaseRequestOptions) =>
                          new Http(backend, options),
          }
        ],
      });
  });

  it('can be injected', inject([DataService], (data: DataService) => {
    expect(data).toBeDefined();
  }));

  it('should fetch & store local data', inject([DataService, MockBackend],
    fakeAsync((data: DataService, backend: MockBackend) => {
      backend.connections.subscribe(conn => {
        expect(conn.request.url).toBe('data.json');
        conn.mockRespond(new Response(responseOptions));
      });

      data.fetch().subscribe(res => {
        expect(res).not.toBeNull();
        expect(res.version).toBe(data.version);
        expect(res.generatedAt).toBe(data.generatedAt);
        expect(res.generatedAt).toBe(data.time.unix());
        expect(res.characters).toEqual(data.characters);
        expect(res.crew).toEqual(data.crew);
        expect(res.episodes).toEqual(data.episodes);
        expect(res.missions).toEqual(data.missions);
        expect(res.races).toEqual(data.races);
        expect(res.skills).toEqual(data.skills);
        expect(res.traits).toEqual(data.traits);
      });
    })));
});
