/*
 *  @author  eidng8
 *  @license https://creativecommons.org/licenses/by-sa/4.0/
 *  @link    https://github.com/eidng8/stthb
 */

import { IDataModel } from '../interfaces/data-model.interface';
import { IStep } from '../interfaces/step.interface';
import { MemberModel } from './member.model';

export class StepModel implements IDataModel<IStep> {
  alt: string[];
  bonus: number[][];
  images: string[];
  locks: number[][];
  name: string;
  req: number[][];
  skills: number[];
  traits: number[][];
  crew: {
    critical?: MemberModel[], pass?: MemberModel[], unlock?: MemberModel[]
  };

  /**
   * Load data form the given step
   * @param data
   */
  load(data: IStep): void {
    /* We don't want to mutate base data, deep-clone everything! */
    this.alt    = data.alt ? JSON.parse(JSON.stringify(data.alt)) : [];
    this.bonus  = data.bonus ? JSON.parse(JSON.stringify(data.bonus)) : [];
    this.images = data.images ? JSON.parse(JSON.stringify(data.images)) : [];
    this.locks  = data.locks ? JSON.parse(JSON.stringify(data.locks)) : [];
    this.name   = data.name;
    this.req    = data.req ? JSON.parse(JSON.stringify(data.req)) : [];
    this.crew   = data.crew ? JSON.parse(JSON.stringify(data.crew)) : [];
    this.skills = data.skills ? data.skills.slice() : [];
  }
}
