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
  traits: string;
  crew: {
    critical?: MemberModel[],
    pass?: MemberModel[],
    unlock?: MemberModel[]
  };

  load(data: IStep): void {
    this.bonus = data.bonus;
    this.locks = data.locks;
    this.req = data.req;
    this.crew = data.crew as any;
  }
}
