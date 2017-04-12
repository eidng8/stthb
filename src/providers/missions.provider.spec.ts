/*
 *  @author  eidng8
 *  @license https://creativecommons.org/licenses/by-sa/4.0/
 *  @link    https://github.com/eidng8/stthb
 */

import { inject, TestBed } from '@angular/core/testing';
import { MemberModel } from '../models/member.model';
import { MissionsProvider } from './missions.provider';

describe('Providers:', () => {

  describe('Missions Provider:', () => {
    let server: any, crew: MemberModel[];

    beforeAll(() => {
      server       = require('../testing/mission-test.data.json');  // tslint:disable-line
      server.ready = true;
      crew         = server.crew.map(member => {
        const mem: MemberModel = new MemberModel();
        mem.load(member, server as any);
        return mem;
      });
    }); // end beforeAll()

    beforeEach(() => {
      TestBed.configureTestingModule({providers: [MissionsProvider]});
    });

    it('can be injected',
      inject([MissionsProvider], (missions: MissionsProvider) => {
        expect(missions).toBeDefined();
        expect(missions).not.toBeNull();
      }));

    it('should load from server data',
      inject([MissionsProvider], (missions: MissionsProvider) => {
        missions.load(server.missions, server as any);
        expect(missions.all.length).toBe(server.missions.length);
      }));

    it('should properly associate mission steps and crew',
      inject([MissionsProvider], (missions: MissionsProvider) => {
        missions.load(server.missions, server as any);
        missions.loadCrew(crew);

        // check association from mission side
        expect(missions.all[0].steps[0].crew.critical[0].name)
          .toBe('1701 Sisko');
        // the above one is easier to see in karma output
        // below one is the real deal
        expect(missions.all[0].steps[0].crew.critical[0])
          .toBe(crew[server.missions[0].steps[0].crew.critical[0]]);

        // check association from crew side
        expect(crew[3].missions.critical[0].mission.name)
          .toBe('The Wrong Crowd');
        expect(crew[3].missions.critical[0].mission).toBe(missions.all[0]);
        expect(crew[3].missions.critical[0].steps).toEqual([0, 1, 2, 3]);
      }));

  }); // end Missions Provider

}); // end Providers
