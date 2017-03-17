/*
 *  @author  eidng8
 *  @license https://creativecommons.org/licenses/by-sa/4.0/
 *  @link    https://github.com/eidng8/stthb
 */

import { TestBed, inject } from '@angular/core/testing';
import { MissionsProvider } from './missions.provider';
import { IServerData } from '../interfaces/server-data.interface';
import { MemberModel } from '../models/member.model';

let data: IServerData, crew: MemberModel[];

describe('Providers:', () =>
{

  describe('Missions Provider:', () =>
  {

    beforeAll(() =>
    {
      data = require('../../www/data.json');  // tslint:disable-line
      crew = data.crew.map(() => new MemberModel());
    }); // end beforeAll()

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

    it('should load from server data',
      inject([MissionsProvider], (missions: MissionsProvider) =>
        {
          missions.load(data);
          missions.loadCrew(crew);
          expect(missions.all.length).toBe(data.missions.length);
          expect(missions.all[0].steps[0].crew.critical[0])
            .toEqual(jasmine.any(MemberModel));
        }));
  });

}); // end Providers:

