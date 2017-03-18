/*
 *  @author  eidng8
 *  @license https://creativecommons.org/licenses/by-sa/4.0/
 *  @link    https://github.com/eidng8/stthb
 */

import { IDataModel } from '../interfaces/data-model.interface';
import { IStep } from '../interfaces/step.interface';
import { MemberModel } from './member.model';

export class StepModel implements IDataModel<IStep> {
  bonus: number[][];
  locks: number[][];
  req: number[][];
  skills: number[];
  traits: number[][];
  crew: {
    critical?: MemberModel[],
    pass?: MemberModel[],
    unlock?: MemberModel[]
  };

  /**
   * Load data form the given step
   * @param data
   */
  load(data: IStep): void {
    /* We don't want to mutate base data, deep-clone everything! */
    this.bonus = data.bonus ? JSON.parse(JSON.stringify(data.bonus)) : [];
    this.locks = data.locks ? JSON.parse(JSON.stringify(data.locks)) : [];
    this.req = data.req ? JSON.parse(JSON.stringify(data.req)) : [];
    this.crew = data.crew ? JSON.parse(JSON.stringify(data.crew)) : [];
    this.skills = data.skills ? data.skills.slice() : [];
  }
}
