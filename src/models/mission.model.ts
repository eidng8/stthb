/*
 *  @author  eidng8
 *  @license https://creativecommons.org/licenses/by-sa/4.0/
 *  @link    https://github.com/eidng8/stthb
 */

import { EMissionType } from '../shared/data.type';
import { IDataModel } from '../interfaces/data-model.interface';
import { IMission } from '../interfaces/mission.interface';
import { StepModel } from './step.model';

export class MissionModel implements IDataModel<IMission> {
  name: string;
  cost: number[];
  type: EMissionType;
  steps?: StepModel[];

  load(data: IMission): void {
    this.name = data.name;
    this.cost = data.cost;
    this.type = data.type;
    if(EMissionType.away == data.type) {
      this.steps = [];
      data.steps.forEach(step =>
      {
        const model: StepModel = new StepModel();
        model.load(step);
        this.steps.push(model);
      });
    }
  }
}
