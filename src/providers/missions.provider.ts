/*
 *  @author  eidng8
 *  @license https://creativecommons.org/licenses/by-sa/4.0/
 *  @link    https://github.com/eidng8/stthb
 */

import each from 'lodash-es/each';
import { Injectable } from '@angular/core';
import { DataService } from '../shared/data.service';
import { MissionModel } from '../models/mission.model';

@Injectable()
/**
 * Fundamental mission data processing features
 */
export class MissionsProvider {

  constructor(private _data: DataService) {
  }

  each(func: (member: MissionModel, index: number) => void): void {
    each(this._data.crew, (data: any, idx: any) => {
      func(data, idx);
    });
  }
}
