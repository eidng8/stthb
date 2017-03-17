/*
 *  @author  eidng8
 *  @license https://creativecommons.org/licenses/by-sa/4.0/
 *  @link    https://github.com/eidng8/stthb
 */

import { Injectable } from '@angular/core';
import { IProvider } from '../interfaces/provider.interface';
import { IMission } from '../interfaces/mission.interface';
import { MissionModel } from '../models/mission.model';
import { IServerData } from '../interfaces/server-data.interface';

@Injectable()
/**
 * Fundamental mission data processing features
 */
export class MissionsProvider implements IProvider {

  protected missions: MissionModel[] = [];

  /**
   * Returns all crew members
   */
  get all(): MissionModel[] {
    return this.missions;
  }

  get count(): number {
    return this.missions.length;
  }

  /**
   * Load crew member from the given server data
   */
  load(data: IServerData): void {
    if(!data || !data.missions) {
      return;
    }

    this.missions = [];
    data.missions.forEach((mission: IMission, idx: number) => {
      this.missions[idx] = new MissionModel();
      this.missions[idx].load(mission);
      /* TODO build various indices here */
    });
  }
}
