/*
 *  @author  eidng8
 *  @license https://creativecommons.org/licenses/by-sa/4.0/
 *  @link    https://github.com/eidng8/stthb
 */

import { TestBed, inject } from '@angular/core/testing';
import { MissionsProvider } from './missions.provider';
import { IServerData } from '../interfaces/server-data.interface';
import { MemberModel } from '../models/member.model';

describe('Providers:', () => {

  describe('Missions Provider:', () => {
    let data: IServerData, crew: MemberModel[];

    beforeAll(() => {
      data = require('../../www/mission-test.data.json');  // tslint:disable-line
      crew = data.crew.map(member => {
        const mem: MemberModel = new MemberModel();
        mem.load(member, data);
        return mem;
      });
    }); // end beforeAll()

    beforeEach(() => {
      TestBed.configureTestingModule({providers: [MissionsProvider]});
    });

    it('can be injected', inject([MissionsProvider],
      (missions: MissionsProvider) => {
        expect(missions).toBeDefined();
        expect(missions).not.toBeNull();
      }));

    it('should load from server data',
      inject([MissionsProvider], (missions: MissionsProvider) => {
        missions.load(data);
        expect(missions.all.length).toBe(data.missions.length);
      }));

    it('should properly associate mission steps and crew',
      inject([MissionsProvider], (missions: MissionsProvider) => {
        missions.load(data);
        missions.loadCrew(crew);

        // check association from mission side
        expect(missions.all[0].steps[0].crew.critical[0].name)
          .toBe('1701 Sisko');
        // the above one is easier to see in karma output
        // below one is the real deal
        expect(missions.all[0].steps[0].crew.critical[0])
          .toBe(data.missions[0].steps[0].crew.critical[0]);

        // check association from crew side
        expect(crew[3].missions.critical[0].mission.name)
          .toBe('The Wrong Crowd');
        expect(crew[3].missions.critical[0].mission).toBe(missions.all[0]);
        expect(crew[3].missions.critical[0].steps).toEqual([0, 1, 2, 3]);
      }));

  }); // end Missions Provider

}); // end Providers
