/*
 *  @author  eidng8
 *  @license https://creativecommons.org/licenses/by-sa/4.0/
 *  @link    https://github.com/eidng8/stthb
 */

import { TestBed, inject } from '@angular/core/testing';
import { CrewProvider } from './crew.provider';
import { IServerData } from '../interfaces/server-data.interface';

describe('Providers:', () => {

  describe('Crew Provider:', () => {
    const data: IServerData = require('../testing/crew-test.data.json');  // tslint:disable-line

    beforeEach(() => {
      TestBed.configureTestingModule({providers: [CrewProvider]});
    });

    it('can be injected', inject([CrewProvider], (crew: CrewProvider) => {
      expect(crew).toBeDefined();
      expect(crew).not.toBeNull();
    }));

    it('should fetch & store local data', inject([CrewProvider],
      (crew: CrewProvider) => {
        crew.load(data);
        expect(crew.all.length).toBe(data.crew.length);
      }));

  }); // end Crew Provider

}); // end Providers:
