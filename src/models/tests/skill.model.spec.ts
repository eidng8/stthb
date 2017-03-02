/*
 *  @author  eidng8
 *  @license https://creativecommons.org/licenses/by-sa/4.0/
 *  @link    https://github.com/eidng8/stthb
 */

import { SkillModel } from '../skill.model';

describe('Models:', () => {
  describe('SkillModel', () => {
    describe('Static Features', () => {
      describe('toAbbr()', () => {
        it('should map skill names to abbreviations', () => {
          expect(SkillModel.toAbbr('command')).toBe('cmd');
          expect(SkillModel.toAbbr('diplomacy')).toBe('dip');
          expect(SkillModel.toAbbr('engineering')).toBe('eng');
          expect(SkillModel.toAbbr('medicine')).toBe('med');
          expect(SkillModel.toAbbr('science')).toBe('sci');
          expect(SkillModel.toAbbr('security')).toBe('sec');
        }); // end maps skill names to abbreviations

        it('abbreviations should remain unchanged', () => {
          expect(SkillModel.toAbbr('cmd')).toBe('cmd');
          expect(SkillModel.toAbbr('dip')).toBe('dip');
          expect(SkillModel.toAbbr('eng')).toBe('eng');
          expect(SkillModel.toAbbr('med')).toBe('med');
          expect(SkillModel.toAbbr('sci')).toBe('sci');
          expect(SkillModel.toAbbr('sec')).toBe('sec');
        }); // end maps skill names to abbreviations

      }); // end toAbbr()

      describe('toName()', () => {
        it('should map skill abbreviations to names', () => {
          expect(SkillModel.toName('cmd')).toBe('command');
          expect(SkillModel.toName('dip')).toBe('diplomacy');
          expect(SkillModel.toName('eng')).toBe('engineering');
          expect(SkillModel.toName('med')).toBe('medicine');
          expect(SkillModel.toName('sci')).toBe('science');
          expect(SkillModel.toName('sec')).toBe('security');
        }); // end maps skill abbreviations to names

        it('names should remain unchanged', () => {
          expect(SkillModel.toName('command')).toBe('command');
          expect(SkillModel.toName('diplomacy')).toBe('diplomacy');
          expect(SkillModel.toName('engineering')).toBe('engineering');
          expect(SkillModel.toName('medicine')).toBe('medicine');
          expect(SkillModel.toName('science')).toBe('science');
          expect(SkillModel.toName('security')).toBe('security');
        }); // end maps skill abbreviations to names

      }); // end toName()

    }); // end Static Features

    describe('Instance Features', () => {
      it('can be created with skill value', () => {
        const model: SkillModel = new SkillModel('cmd', 1);
        expect(model).toBeDefined();
        expect(model.abbr).toBe('cmd');
        expect(model.name).toBe('command');
        expect(model.value).toBe(1);
      }); // end can be created

      it('can be created with value range', () => {
        const model: SkillModel = new SkillModel('dip', [1, 2]);
        expect(model).toBeDefined();
        expect(model.abbr).toBe('dip');
        expect(model.name).toBe('diplomacy');
        expect(model.value).toEqual([1, 2]);
      }); // end can be created

      it('can be created with skill value & range', () => {
        const model: SkillModel = new SkillModel('sec', [1, 2, 3]);
        expect(model).toBeDefined();
        expect(model.abbr).toBe('sec');
        expect(model.name).toBe('security');
        expect(model.value).toEqual([1, 2, 3]);
      }); // end can be created

    }); // end Instance Features

  }); // end SkillsModel

}); // end Models: