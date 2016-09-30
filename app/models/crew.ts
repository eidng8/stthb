/**
 * Created by JC on 2016-09-17.
 */

import * as _ from 'lodash';
import {ICrewMember, ISkills} from '../interfaces/crew';
import {IDBCrew} from '../interfaces/db/crew';

/**
 * Number of recorded levels
 */
const NUM_LEVELS:number = 11;

/**
 * Crew member data model
 */
export class CrewMember implements ICrewMember
{
  /**
   * Crew member name
   */
  public name:string;

  /**
   * Crew member wiki page URI
   */
  public uri:string;

  /**
   * Crew member thumbnail URI
   */
  public picture:string;

  /**
   * Original TV character name
   */
  public character:string;

  /**
   * Crew member rarity
   */
  public stars:number;

  /**
   * Crew member race
   */
  public race:string;

  /**
   * List of traits the crew member possesses
   */
  public traits:string[];

  /**
   * List of all skills the crew member possesses and their leveled values
   */
  private _skills:ISkills;

  /**
   * {@link ISkills} type guard
   * @param obj
   */
  public static areSkills(obj:any):obj is ISkills
  {
    return CrewMember.validateSkill(obj);
  }

  /**
   * {@link ICrewMember} type guard
   * @param obj
   */
  public static isCrew(obj:any):obj is ICrewMember
  {
    return obj && obj.skills && CrewMember.areSkills(obj.skills);
  }

  /**
   * {@link IDBCrew} type guard
   * @param obj
   */
  public static isDBCrew(obj:any):obj is IDBCrew
  {
    return CrewMember.validateSkill(obj);
  }

  /**
   * Check if the given object contains valid skills
   * @param obj
   * @returns {boolean}
   */
  private static validateSkill(obj:any):boolean
  {
    return obj && (obj.cmd && Array.isArray(obj.cmd)
                   || obj.dip && Array.isArray(obj.dip)
                   || obj.eng && Array.isArray(obj.eng)
                   || obj.med && Array.isArray(obj.med)
                   || obj.sci && Array.isArray(obj.sci)
                   || obj.sec && Array.isArray(obj.sec));
  }

  /**
   * Constructor
   * @param crew Initial crew data
   */
  public constructor(crew?:ICrewMember|IDBCrew)
  {
    if(!crew)
    {
      return;
    }

    if(CrewMember.isCrew(crew))
    {
      Object.assign(this, JSON.parse(JSON.stringify(crew)));
      return;
    }

    this.initWithDBCrew(crew);
  }

  /**
   * List of all skills the crew member possesses and their leveled values
   * @returns {ISkills}
   */
  public get skills():ISkills
  {
    return this._skills;
  }

  /**
   * Sets crew member's skills
   * @param value
   */
  public set skills(value:ISkills)
  {
    if(!value || _.isEmpty(value))
    {
      this._skills = null;
      return;
    }

    this._skills = Object.assign({}, value);
    _.forOwn(this._skills, (skill, id) =>
    {
      if(skill && Array.isArray(skill) && skill.length > 0)
      {
        // fill empty skill levels with previous level
        let idx:number = skill.length - 1, last:number = idx;
        while(!skill[idx] || !Array.isArray(skill[idx])
              || skill[idx].length <= 0)
        {
          if(--idx < 0)
          {
            delete this._skills[id];
            break;
          }
        }

        if(idx >= 0 && idx != last)
        {
          skill[last] = skill[idx];
        }
      }
      else
      {
        delete this._skills[id];
      }
    });
  }

  /**
   * List of all skills (abbreviation) the crew member possesses as array,
   * without leveled values.
   * @returns {string[]}
   */
  public get possessing():string[]
  {
    if(!this._skills)
    {
      return null;
    }

    let ret:string[] = Object.keys(this._skills);
    return ret.length > 0 ? ret : null;
  }

  /**
   * Check if the crew possesses the given skill
   * @param skill Skill abbreviation
   * @returns {boolean}
   */
  public possess(skill:string):boolean
  {
    if(!this._skills)
    {
      return false;
    }

    return !!this._skills[skill];
  }

  /**
   * Check if the crew possesses the any of the given skills
   * @param skills Skill abbreviations
   * @returns {boolean}
   */
  public possessAny(skills:string[]):boolean
  {
    if(!this._skills)
    {
      return false;
    }

    return _.intersection(this.possessing, skills).length > 0;
  }

  /**
   * Check if the crew possesses the all of the given skills
   * @param skills Skill abbreviations
   * @returns {boolean}
   */
  public possessAll(skills:string[]):boolean
  {
    if(!this._skills)
    {
      return false;
    }

    return _.intersection(this.possessing, skills).length == skills.length;
  }

  /**
   * Returns the value of the skill at given star & level.
   * @param skill Skill abbreviation
   * @param star Number of star
   * @param level Member level, can only be 10s levels
   */
  public skillValue(skill:string, star?:number, level?:number):number
  {
    if(!this._skills || !this._skills[skill])
    {
      return 0;
    }

    star = star || (this.stars - 1);
    level = level || (NUM_LEVELS - 1);
    return this._skills[skill][star][level];
  }

  /**
   * Initialize the instance with the given {@link IDBCrew} data.
   * @param crew
   */
  private initWithDBCrew(crew:IDBCrew):void
  {
    if(!CrewMember.isDBCrew(crew))
    {
      return;
    }

    crew = JSON.parse(JSON.stringify(crew));
    this.name = crew.name;
    this.uri = crew.uri;
    this.picture = crew.picture;
    this.character = crew.character;
    this.stars = crew.stars;
    this.race = crew.race;
    this.traits = crew.traits;
    this.skills = {
      cmd: crew.cmd,
      dip: crew.dip,
      eng: crew.eng,
      med: crew.med,
      sci: crew.sci,
      sec: crew.sec,
    };
  }
}
