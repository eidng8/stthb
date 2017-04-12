/*
 *  @author  eidng8
 *  @license https://creativecommons.org/licenses/by-sa/4.0/
 *  @link    https://github.com/eidng8/stthb
 */

import { Injectable } from '@angular/core';
import forOwn from 'lodash-es/forOwn';
import { IMission } from '../interfaces/mission.interface';
import { IProvider } from '../interfaces/provider.interface';
import { MemberModel } from '../models/member.model';
import { MissionModel } from '../models/mission.model';
import { DataService } from '../shared/data.service';
import { EMissionType } from '../shared/data.type';

@Injectable()
/**
 * Fundamental mission data processing features
 */
export class MissionsProvider implements IProvider<MissionModel> {

  protected missions: MissionModel[] = [];

  protected names: { [key: string]: MissionModel };

  /**
   * Returns all crew members
   */
  get all(): MissionModel[] {
    return this.missions;
  }

  get count(): number {
    return this.missions.length;
  }

  get(idx: number): MissionModel {
    return this.missions[idx];
  }

  named(name: string): MissionModel {
    return this.names[name];
  }

  /**
   * Load crew member from the given server data. {@see loadCrew()} MUST be
   * called subsequently in order to completely finish loading process.
   */
  load(missions: IMission[], data: DataService): void {
    if (!missions || !missions.length || !data.ready) {
      return;
    }

    this.missions = [];
    this.names = {};
    missions.forEach((mission: IMission, idx: number) => {
      // load the given data to a model
      this.missions[idx] = new MissionModel();
      this.missions[idx].load(mission, data);

      // update mission name index
      this.names[mission.name] = this.missions[idx];
    });
  }

  /**
   * Associate crew with mission steps
   * @param crew
   */
  loadCrew(crew: MemberModel[]): void {
    this.all.forEach((mission, idx) => {
      if (EMissionType.away != mission.type) {
        return;
      }

      mission.steps.forEach((step, sidx) => {
        forOwn<MemberModel[]>(step.crew, (members, key) => {
          step.crew[key] = members.map(member => {
            let mem: MemberModel = member;
            if ('number' == typeof member) {
              mem = crew[member as number];
            }
            this.associate(mem, mission, sidx, key, idx);
            return mem;
          });
        });
      });
    });
  }

  /**
   * Associate member and mission step
   *
   * @param member The member to be associated
   * @param mission The mission to be associated
   * @param step The mission step (index in mission) to be associated
   * @param key Which key to associate to, 'critical', 'pass', or 'unlock'
   * @param idx Mission index
   */
  protected associate(member: MemberModel, mission: MissionModel, step: number,
                      key: string, idx: number): void {
    // create critical/pass/unlock entry if necessary
    if (!member.missions[key]) {
      member.missions[key] = {};
    }

    // associate the mission
    if (!member.missions[key][idx]) {
      member.missions[key][idx] = {};
    }
    member.missions[key][idx].mission = mission;

    // associate mission step
    if (!member.missions[key][idx].steps) {
      member.missions[key][idx].steps = [];
    }
    member.missions[key][idx].steps.push(step);
  }
}
