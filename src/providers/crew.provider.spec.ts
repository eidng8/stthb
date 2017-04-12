/*
 *  @author  eidng8
 *  @license https://creativecommons.org/licenses/by-sa/4.0/
 *  @link    https://github.com/eidng8/stthb
 */

import { inject, TestBed } from '@angular/core/testing';
import { CrewProvider } from './crew.provider';

describe('Providers:', () => {

  describe('Crew Provider:', () => {
    const server: any = require('../testing/crew-test.data.json');  // tslint:disable-line
    server.ready      = true;

    beforeEach(() => {
      TestBed.configureTestingModule({providers: [CrewProvider]});
    });

    it('can be injected', inject([CrewProvider], (crew: CrewProvider) => {
      expect(crew).toBeDefined();
      expect(crew).not.toBeNull();
    }));

    it('should fetch & store local data',
      inject([CrewProvider], (crew: CrewProvider) => {
        crew.load(server.crew, server as any);
        expect(crew.all.length).toBe(server.crew.length);
      }));

  }); // end Crew Provider

}); // end Providers:
