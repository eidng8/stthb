/*
 *  @author  eidng8
 *  @license https://creativecommons.org/licenses/by-sa/4.0/
 *  @link    https://github.com/eidng8/stthb
 */

import { Injectable } from '@angular/core';
import { IProvider } from '../interfaces/provider.interface';
import { MissionModel } from '../models/mission.model';
import { DataService } from '../shared/data.service';
import { Factory } from '../shared/factory';

@Injectable()
/**
 * Fundamental mission data processing features
 */
export class MissionsProvider implements IProvider {

  protected missions: MissionModel[];

  constructor(private factory: Factory, server: DataService) {
    this.load(server);
  }

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
  load(server: DataService): void {
    if(!(server instanceof DataService)) {
      return;
    }

    this.missions = [];
    this.missions = <any>this.factory; // dummy remove me
    // each(server.missions, (data: IMission, idx: number) => {
    //   this.missions[idx] = this.factory.mission(data);
    //   /* TODO build various indices here */
    // });
  }
}
