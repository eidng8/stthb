/*
 *  @author  eidng8
 *  @license https://creativecommons.org/licenses/by-sa/4.0/
 *  @link    https://github.com/eidng8/stthb
 */

import { IDataModel } from '../interfaces/data-model.interface';
import { IMission } from '../interfaces/mission.interface';
import { EMissionType } from '../shared/data.type';
import { StepModel } from './step.model';

export class MissionModel implements IDataModel<IMission> {
  name: string;
  cost: number[];
  type: EMissionType;
  steps?: StepModel[];
  // episode: string;
  image: string[];

  load(mission: IMission/*, server: IServerData*/): void {
    this.name  = mission.name;
    this.cost  = mission.cost;
    this.type  = mission.type;
    // this.episode  = server.episodes[mission.episode];
    this.image = mission.image;

    if (EMissionType.away == mission.type) {
      this.steps = [];
      mission.steps.forEach(step => {
        const model: StepModel = new StepModel();
        model.load(step);
        this.steps.push(model);
      });
    }
  }
}
