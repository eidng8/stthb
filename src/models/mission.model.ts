/*
 *  @author  eidng8
 *  @license https://creativecommons.org/licenses/by-sa/4.0/
 *  @link    https://github.com/eidng8/stthb
 */

import { IDataModel } from '../interfaces/data-model.interface';
import { IMission } from '../interfaces/mission.interface';
import { DataService } from '../shared/data.service';
import { EMissionType } from '../shared/data.type';
import { StepModel } from './step.model';

export class MissionModel implements IDataModel<IMission> {
  protected dataService: DataService;

  private _name: string;
  private _cost: number[];
  private _type: EMissionType;
  private _steps?: StepModel[];
  private _episode: number;
  private _image: string[];

  get name(): string {
    return this._name;
  }

  get cost(): number[] {
    return this._cost;
  }

  get type(): EMissionType {
    return this._type;
  }

  get steps(): StepModel[] {
    return this._steps;
  }

  get episode(): string {
    return this.dataService.episodes[this._episode];
  }

  get image(): string[] {
    return this._image;
  }

  load(mission: IMission, data: DataService): void {
    this._name       = mission.name;
    this._cost       = mission.cost;
    this._type       = mission.type;
    this._episode    = mission.episode;
    this._image      = mission.image;
    this.dataService = data;

    if (EMissionType.away == mission.type) {
      this._steps = [];
      mission.steps.forEach(step => {
        const model: StepModel = new StepModel();
        model.load(step, data);
        this._steps.push(model);
      });
    }
  }
}
