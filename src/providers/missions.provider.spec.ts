/*
 *  @author  eidng8
 *  @license https://creativecommons.org/licenses/by-sa/4.0/
 *  @link    https://github.com/eidng8/stthb
 */

import { TestBed, inject } from '@angular/core/testing';
import { MissionsProvider } from './missions.provider';
import { IServerData } from '../interfaces/server-data.interface';

const data: IServerData = require('../../www/data.json');  // tslint:disable-line

describe('Providers:', () =>
{

  describe('Missions Provider:', () =>
  {

    beforeEach(() =>
    {
      TestBed.configureTestingModule({providers: [MissionsProvider]});
    });

    it('can be injected', inject([MissionsProvider],
      (missions: MissionsProvider) =>
      {
        expect(missions).toBeDefined();
        expect(missions).not.toBeNull();
      }));

    it('should fetch & store local data',
      inject([MissionsProvider], (missions: MissionsProvider) =>
        {
          missions.load(data);
          expect(missions.all.length).toBe(data.missions.length);
        }));
  });

}); // end Providers:

