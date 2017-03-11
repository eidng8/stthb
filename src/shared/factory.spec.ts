/*
 *  @author  eidng8
 *  @license https://creativecommons.org/licenses/by-sa/4.0/
 *  @link    https://github.com/eidng8/stthb
 */

import { inject, TestBed } from '@angular/core/testing';
import { Factory } from './factory';
import { provideMockDataService } from '../testing/data.service.mock';
import { MemberModel } from '../models/member.model';
import { SkillsModel } from '../models/skills.model';
import { MissionModel } from '../models/mission.model';

const fixtureData: any = require('../../www/data.json');  // tslint:disable-line

describe('Model Factory:', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideMockDataService,
        Factory,
      ],
    });
  }); // end beforeEach()

  describe('MemberModel creator', () => {
    let factory: Factory;

    beforeEach(inject([Factory], (fab: Factory) => {
      factory = fab;
    })); // end beforeEach()

    it('can be injected', () => {
      expect(factory).toBeDefined();
    }); // end can be injected

    it('should create member model', () => {
      const mccoy: MemberModel = factory.member(fixtureData.crew[0]);
      expect(mccoy.name).toBe('"Dark Ages" McCoy');
    }); // end should create member model

    it('should create skill model', () => {
      const skills: SkillsModel = factory.skills(fixtureData.crew[0].skills);
      expect(skills.dip.base).toBe(157);
      expect(skills.med.lower).toBe(201);
      expect(skills.sec.upper).toBe(332);
    }); // end should create skill model

  }); // end can be injected

  describe('MissionModel creator', () => {
    let factory: Factory;

    beforeEach(inject([Factory], (fab: Factory) => {
      factory = fab;
    })); // end beforeEach()

    it('can be injected', () => {
      expect(factory).toBeDefined();
    }); // end can be injected

    it('should create mission model', () => {
      const mission: MissionModel = factory.mission(fixtureData.missions[0]);
      expect(mission.name).toBe('The Wrong Crowd');
    }); // end should create member model

  }); // end can be injected

}); // end Model Factory
