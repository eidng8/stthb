/*
 *  @author  eidng8
 *  @license https://creativecommons.org/licenses/by-sa/4.0/
 *  @link    https://github.com/eidng8/stthb
 */

import { SkillsModel } from '../skills.model';
import { SkillModel } from '../skill.model';

describe('Models:', () => {
  describe('SkillsModel', () => {
    let model: SkillsModel;

    beforeEach(() => {
      model = new SkillsModel();
    }); // end beforeEach()

    it('should be initialized with empty skills', () => {
      expect(model).toBeDefined();
      expect(model.cmd).toBeUndefined();
      expect(model.dip).toBeUndefined();
      expect(model.eng).toBeUndefined();
      expect(model.med).toBeUndefined();
      expect(model.sci).toBeUndefined();
      expect(model.sec).toBeUndefined();
    }); // end can be created

    it('can set & get cmd skill', () => {
      model.set('cmd', [2, 3, 4]);
      expect(model.cmd.base).toBe(2);
      model.set(new SkillModel('sec', [3, 4, 5]));
      expect(model.sec.lower).toBe(4);
    }); // end can be created

    it('can set & get dip skill', () => {
      model.set('diplomacy', [2, 3, 4]);
      expect(model.dip.base).toBe(2);
    }); // end can be created

    it('can set & get eng skill', () => {
      model.set('eng', [2, 3, 4]);
      expect(model.eng.base).toBe(2);
    }); // end can be created

    it('can set & get med skill', () => {
      model.set('med', [2, 3, 4]);
      expect(model.med.base).toBe(2);
    }); // end can be created

    it('can set & get sci skill', () => {
      model.set('sci', [2, 3, 4]);
      expect(model.sci.base).toBe(2);
    }); // end can be created

    it('can set & get sec skill', () => {
      model.set('sec', [2, 3, 4]);
      expect(model.sec.base).toBe(2);
    }); // end can be created

    it('can be iterated', () => {
      const values: any = {
        'dip': [2, 3, 4],
        'eng': [3, 4, 5],
        'sci': [5, 6, 7],
      };

      model.set('dip', values.dip);
      model.set('eng', values.eng);
      model.set('sci', values.sci);

      let looped: number = 0;
      model.each((skill, abbr) => {
        looped++;
        expect(skill.abbr).toBe(abbr);
        expect(skill.base).toBe(values[abbr][0]);
        expect(skill.lower).toBe(values[abbr][1]);
        expect(skill.upper).toBe(values[abbr][2]);
      });

      expect(looped).toBe(3);
    }); // end can be iterated

    it('iteration can be stopped explicitly', () => {
      const values: any = {
        'dip': [2, 3, 4],
        'eng': [3, 4, 5],
        'sci': [5, 6, 7],
      };

      model.set('dip', values.dip);
      model.set('eng', values.eng);
      model.set('sci', values.sci);

      let looped: number = 0;
      model.each((skill, abbr) => {
        looped++;
        expect(skill.abbr).toBe(abbr);
        expect(skill.base).toBe(values[abbr][0]);
        expect(skill.lower).toBe(values[abbr][1]);
        expect(skill.upper).toBe(values[abbr][2]);
        return false;
      });

      expect(looped).toBe(1);
    }); // end can be iterated

  }); // end SkillsModel

}); // end Models:
