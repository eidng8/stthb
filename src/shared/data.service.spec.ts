/*
 *  @author  eidng8
 *  @license https://creativecommons.org/licenses/by-sa/4.0/
 *  @link    https://github.com/eidng8/stthb
 */

import * as moment from 'moment';
import {
  Http,
  BaseRequestOptions,
  ResponseOptions,
  Response,
  BaseResponseOptions
} from '@angular/http';
import { TestBed, inject, fakeAsync, tick } from '@angular/core/testing';
import { MockBackend } from '@angular/http/testing';
import { DataService } from './data.service';

const fixtureData: any = require('../../www/data.json');  // tslint:disable-line

describe('Data Service:', () => {

  let responseOptions: ResponseOptions = new BaseResponseOptions();
  responseOptions = responseOptions.merge({body: JSON.stringify(fixtureData)});

  beforeEach(() => {
    TestBed.configureTestingModule(
      {
        providers: [
          MockBackend,
          BaseRequestOptions,
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

  describe('.constructor', () => {
    it('Should be defined', inject([DataService], (data: DataService) => {
      expect(data).toBeDefined();
    }));
  });

  it('Should fetch & store local data',
     inject([DataService, MockBackend],
            fakeAsync((data: DataService, backend: MockBackend) => {
              backend.connections.subscribe(conn => {
                expect(conn.request.url).toBe('data.json');
                conn.mockRespond(new Response(responseOptions));
              });

              data.fetch().subscribe(res => {
                expect(res).not.toBeNull();
                expect(res.crew).toBe(data.crew);
                expect(res.missions[0]).toBe(data.episodes);
                expect(res.missions[1]).toBe(data.missions);
              });
              tick();

              expect(data.crew).toEqual(jasmine.any(Array));
              expect(data.episodes).toEqual(jasmine.any(Array));
              expect(data.missions).toEqual(jasmine.any(Array));
              expect(moment.isMoment(data.version)).toBeTruthy();
            })));
});
