/**
 * Created by JC on 2016-09-17.
 */

import {CrewProvider} from './crew';
import {CrewMember} from '../models/crew';
import {MockDataService} from '../../tests/mocks/data-service';


let crew:CrewProvider = new CrewProvider(<any>new MockDataService());

describe(
  'CrewProvider', () =>
  {
    it('has length', () =>
    {
      expect(crew.length).toBeGreaterThan(0);
      expect(crew.count()).toEqual(crew.length);
    });

    it('lists all members', () =>
    {
      expect(Array.isArray(crew.list())).toBeTruthy();

      let pass:boolean = true, msg:string = '';
      crew.list().some(
        (mem, idx) =>
        {
          if(!(mem instanceof CrewMember))
          {
            pass = false;
            msg = `expected ${mem.toString()} @ ${idx} to be CrewMember`;
            return true;
          }
        });
      expect(pass).toBeTruthy(msg);
    });

    it('can get by index', () =>
    {
      expect(crew.get(0).name).toEqual('"Dark Ages" McCoy');
    });

    it('can get by id or name, they are the same', () =>
    {
      expect(crew.byId('"Dark Ages" McCoy').name).toEqual('"Dark Ages" McCoy');
      expect(crew.byId('"Dark Ages" McCoy'))
        .toBe(crew.byId('"Dark Ages" McCoy'));
    });

    it('can get by stars', () =>
    {
      let got:any = crew.byStar(3);
      expect(Array.isArray(got)).toBeTruthy();
      expect(got.length).toBeGreaterThan(0);
      expect(typeof got[0]).toEqual('number');
    });

    it('can get by skill', () =>
    {
      let got:any = crew.bySkill('cmd');
      expect(Array.isArray(got)).toBeTruthy();
      expect(got.length).toBeGreaterThan(0);
      expect(typeof got[0]).toEqual('number');
    });

    it('can get by trait', () =>
    {
      let got:any = crew.byTrait('Inspiring');
      expect(Array.isArray(got)).toBeTruthy();
      expect(got.length).toBeGreaterThan(0);
      expect(typeof got[0]).toEqual('number');
    });
  });
