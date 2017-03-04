/*
 *  @author  eidng8
 *  @license https://creativecommons.org/licenses/by-sa/4.0/
 *  @link    https://github.com/eidng8/stthb
 */

import { SkillsModel } from '../skills.model';

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
      model.cmd = [2, 3, 4];
      expect(model.cmd).toEqual([2, 3, 4]);
      const skill: string = 'cmd';
      model[skill] = [3, 4, 5];
      expect(model.cmd).toEqual([3, 4, 5]);
    }); // end can be created

    it('can set & get dip skill', () => {
      model.dip = [2, 3, 4];
      expect(model.dip).toEqual([2, 3, 4]);
    }); // end can be created

    it('can set & get eng skill', () => {
      model.eng = [2, 3, 4];
      expect(model.eng).toEqual([2, 3, 4]);
    }); // end can be created

    it('can set & get med skill', () => {
      model.med = [2, 3, 4];
      expect(model.med).toEqual([2, 3, 4]);
    }); // end can be created

    it('can set & get sci skill', () => {
      model.sci = [2, 3, 4];
      expect(model.sci).toEqual([2, 3, 4]);
    }); // end can be created

    it('can set & get sec skill', () => {
      model.sec = [2, 3, 4];
      expect(model.sec).toEqual([2, 3, 4]);
    }); // end can be created

  }); // end SkillsModel

}); // end Models:
