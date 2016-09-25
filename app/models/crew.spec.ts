/**
 * Created by JC on 2016-09-17.
 */

import {CrewMember} from './crew';
import {ISkills, ICrewMember} from '../interfaces/crew';
import {IDBCrew} from '../interfaces/db/crew';

const fixtureSkills:ISkills[] = [
  {
    cmd: [[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]],
  },
  {
    cmd: [[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]],
    med: [[0, 1, 2, 3, 4, 5, 6, 7, 8, 9], [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]],
  },
  {
    cmd: [[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]],
    dip: [null, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]],
    eng: [
      [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], [9, 8, 7, 6, 5, 4, 3, 2, 1, 0],
      [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    ],
  },
  {
    cmd: [[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]],
    dip: [[0, 1, 2, 3, 4, 5, 6, 7, 8, 9], [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]],
    eng: [
      [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
      [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    ],
    med: [
      [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
      [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    ],
  },
  {
    cmd: [[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]],
    dip: [[0, 1, 2, 3, 4, 5, 6, 7, 8, 9], [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]],
    eng: [
      [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
      [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    ],
    med: [
      [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
      [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    ],
    sci: [
      [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
      [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
      [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    ],
    sec: [
      [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
      [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
      [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    ],
  },
];

const fixtureCrew:ICrewMember = {
  character: 'test character',
  name:      'test crew',
  picture:   'test picture URI',
  race:      'test race',
  skills:    fixtureSkills[4],
  stars:     5,
  traits:    ['test trait 1', 'test trait 2'],
  uri:       'test URI',
};

const fixtureDBCrew:IDBCrew = {
  character: 'test character',
  cmd:       fixtureSkills[4].cmd,
  dip:       fixtureSkills[4].dip,
  eng:       fixtureSkills[4].eng,
  med:       fixtureSkills[4].med,
  name:      'test crew',
  picture:   'test picture URI',
  race:      'test race',
  sci:       fixtureSkills[4].sci,
  sec:       fixtureSkills[4].sec,
  stars:     5,
  traits:    ['test trait 1', 'test trait 2'],
  uri:       'test URI',
};


describe(
  'CrewModel', () =>
  {
    it('can be created with existing data, and input is untouched', () =>
    {
      let crew:CrewMember = new CrewMember(fixtureCrew);

      expect(crew.character).toEqual('test character');
      expect(crew.name).toEqual('test crew');
      expect(crew.picture).toEqual('test picture URI');
      expect(crew.race).toEqual('test race');
      expect(crew.skills).toEqual(fixtureSkills[4]);
      expect(crew.stars).toEqual(5);
      expect(crew.traits).toEqual(['test trait 1', 'test trait 2']);
      expect(crew.uri).toEqual('test URI');
      expect(crew.possessing).toEqual(
        ['cmd', 'dip', 'eng', 'med', 'sci', 'sec']);
      expect(crew.possess('cmd')).toBeTruthy();
      expect(crew.possess('dip')).toBeTruthy();
      expect(crew.possess('eng')).toBeTruthy();
      expect(crew.possess('med')).toBeTruthy();
      expect(crew.possess('sci')).toBeTruthy();
      expect(crew.possess('sec')).toBeTruthy();

      crew.traits = [];
      expect(crew.traits.length).toBe(0);
      expect(fixtureDBCrew.traits).toEqual(['test trait 1', 'test trait 2']);

      const expected:any = fixtureSkills[4];
      crew.skills = [];
      expect(crew.possessing).toBeNull();
      expect(fixtureSkills[4]).toEqual(expected);
    });

    it('can be created with db data, and input is untouched', () =>
    {
      let crew:CrewMember = new CrewMember(fixtureDBCrew);

      expect(crew.character).toEqual('test character');
      expect(crew.name).toEqual('test crew');
      expect(crew.picture).toEqual('test picture URI');
      expect(crew.race).toEqual('test race');
      expect(crew.skills).toEqual(fixtureSkills[4]);
      expect(crew.stars).toEqual(5);
      expect(crew.traits).toEqual(['test trait 1', 'test trait 2']);
      expect(crew.uri).toEqual('test URI');
      expect(crew.possessing).toEqual(
        ['cmd', 'dip', 'eng', 'med', 'sci', 'sec']);
      expect(crew.possess('cmd')).toBeTruthy();
      expect(crew.possess('dip')).toBeTruthy();
      expect(crew.possess('eng')).toBeTruthy();
      expect(crew.possess('med')).toBeTruthy();
      expect(crew.possess('sci')).toBeTruthy();
      expect(crew.possess('sec')).toBeTruthy();

      crew.traits = [];
      expect(crew.traits.length).toBe(0);
      expect(fixtureDBCrew.traits).toEqual(['test trait 1', 'test trait 2']);

      const expected:any = fixtureSkills[4];
      crew.skills = [];
      expect(crew.possessing).toBeNull();
      expect(fixtureSkills[4]).toEqual(expected);
    });

    it('should accept new skill', () =>
    {
      let crew:CrewMember = new CrewMember();

      crew.skills = fixtureSkills[0];
      expect(crew.skills).toEqual(fixtureSkills[0]);
      expect(crew.possessing).toEqual(['cmd']);
      expect(crew.possess('cmd')).toBeTruthy();
    });

    it('should accept new skill array', () =>
    {
      let crew:CrewMember = new CrewMember();

      crew.skills = fixtureSkills[4];
      expect(crew.skills).toEqual(fixtureSkills[4]);
      expect(crew.possessing).toEqual(
        ['cmd', 'dip', 'eng', 'med', 'sci', 'sec']);
      expect(crew.possess('cmd')).toBeTruthy();
      expect(crew.possess('dip')).toBeTruthy();
      expect(crew.possess('eng')).toBeTruthy();
      expect(crew.possess('med')).toBeTruthy();
      expect(crew.possess('sci')).toBeTruthy();
      expect(crew.possess('sec')).toBeTruthy();
    });

    it('should use the max-star skill array', () =>
    {
      let crew:CrewMember = new CrewMember();

      crew.skills = fixtureSkills[2];
      expect(crew.skills).toEqual(fixtureSkills[2]);
      expect(crew.possessing).toEqual(['cmd', 'dip', 'eng']);
    });

    it('should not accept null skill', () =>
    {
      let crew:CrewMember = new CrewMember();

      let skills:ISkills = Object.assign({}, fixtureSkills[2]);
      skills.eng = null;
      crew.skills = skills;
      expect(crew.possessing).toEqual(['cmd', 'dip']);
      expect(crew.possess('cmd')).toBeTruthy();
      expect(crew.possess('dip')).toBeTruthy();
      expect(crew.possess('eng')).toBeFalsy();
    });

    it('should not accept empty skill array', () =>
    {
      let crew:CrewMember = new CrewMember();

      let skills:ISkills = Object.assign({}, fixtureSkills[2]);
      skills.eng = [];
      crew.skills = skills;
      expect(crew.possessing).toEqual(['cmd', 'dip']);
      expect(crew.possess('cmd')).toBeTruthy();
      expect(crew.possess('dip')).toBeTruthy();
      expect(crew.possess('eng')).toBeFalsy();
    });

    it('should not accept non-array skill', () =>
    {
      let crew:CrewMember = new CrewMember();

      let skills:ISkills = Object.assign({}, fixtureSkills[2]);
      skills.eng = <any>'abc';
      crew.skills = skills;
      expect(crew.possessing).toEqual(['cmd', 'dip']);
      expect(crew.possess('cmd')).toBeTruthy();
      expect(crew.possess('dip')).toBeTruthy();
      expect(crew.possess('eng')).toBeFalsy();
    });

    it('should use the last non-empty skill', () =>
    {
      let crew:CrewMember = new CrewMember();

      /* Take note! This is object deep clone. Don't use `Object.assign` */
      let skills:ISkills = JSON.parse(JSON.stringify(fixtureSkills[2]));
      skills.eng[skills.eng.length - 1] = [];

      let expected:ISkills = JSON.parse(JSON.stringify(fixtureSkills[2]));
      expected.eng[expected.eng.length - 1]
        = expected.eng[expected.eng.length - 2];
      expect(expected).not.toEqual(fixtureSkills[2]);

      crew.skills = skills;
      expect(crew.skills).toEqual(expected);
      expect(crew.possessing).toEqual(['cmd', 'dip', 'eng']);
      expect(crew.possess('cmd')).toBeTruthy();
      expect(crew.possess('dip')).toBeTruthy();
      expect(crew.possess('eng')).toBeTruthy();
    });

    it('should use the last non-null skill array', () =>
    {
      let crew:CrewMember = new CrewMember();

      /* Take note! This is object deep clone. Don't use `Object.assign` */
      let skills:ISkills = JSON.parse(JSON.stringify(fixtureSkills[2]));
      skills.eng[skills.eng.length - 1] = null;

      let expected:ISkills = JSON.parse(JSON.stringify(fixtureSkills[2]));
      expected.eng[expected.eng.length - 1]
        = expected.eng[expected.eng.length - 2];
      expect(expected).not.toEqual(fixtureSkills[2]);

      crew.skills = skills;
      expect(crew.skills).toEqual(expected);
      expect(crew.possessing).toEqual(['cmd', 'dip', 'eng']);
      expect(crew.possess('cmd')).toBeTruthy();
      expect(crew.possess('dip')).toBeTruthy();
      expect(crew.possess('eng')).toBeTruthy();
    });

    it('should use the last array-type skill', () =>
    {
      let crew:CrewMember = new CrewMember();

      /* Take note! This is object deep clone. Don't use `Object.assign` */
      let skills:ISkills = JSON.parse(JSON.stringify(fixtureSkills[2]));
      skills.eng[skills.eng.length - 1] = <any>'abc';

      let expected:ISkills = JSON.parse(JSON.stringify(fixtureSkills[2]));
      expected.eng[expected.eng.length - 1]
        = expected.eng[expected.eng.length - 2];
      expect(expected).not.toEqual(fixtureSkills[2]);

      crew.skills = skills;
      expect(crew.skills).toEqual(expected);
      expect(crew.possessing).toEqual(['cmd', 'dip', 'eng']);
      expect(crew.possess('cmd')).toBeTruthy();
      expect(crew.possess('dip')).toBeTruthy();
      expect(crew.possess('eng')).toBeTruthy();
    });

    it('can handle null skill', () =>
    {
      let crew:CrewMember = new CrewMember();
      crew.skills = null;
      expect(crew.skills).toBeNull();
      expect(crew.possessing).toBeNull();
      expect(crew.possess('cmd')).toBeFalsy();
      expect(crew.possess('dip')).toBeFalsy();
      expect(crew.possess('eng')).toBeFalsy();
      expect(crew.possess('med')).toBeFalsy();
      expect(crew.possess('sci')).toBeFalsy();
      expect(crew.possess('sec')).toBeFalsy();
    });

    it('can handle completely empty skill list', () =>
    {
      let crew:CrewMember = new CrewMember();
      crew.skills = {};
      expect(crew.skills).toBeNull();
      expect(crew.possessing).toBeNull();
      expect(crew.possess('cmd')).toBeFalsy();
      expect(crew.possess('dip')).toBeFalsy();
      expect(crew.possess('eng')).toBeFalsy();
      expect(crew.possess('med')).toBeFalsy();
      expect(crew.possess('sci')).toBeFalsy();
      expect(crew.possess('sec')).toBeFalsy();
    });

  });
