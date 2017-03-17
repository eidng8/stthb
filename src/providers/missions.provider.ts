/*
 *  @author  eidng8
 *  @license https://creativecommons.org/licenses/by-sa/4.0/
 *  @link    https://github.com/eidng8/stthb
 */
import forOwn from 'lodash-es/forOwn';
import { Injectable } from '@angular/core';
import { IProvider } from '../interfaces/provider.interface';
import { IMission } from '../interfaces/mission.interface';
import { MissionModel } from '../models/mission.model';
import { IServerData } from '../interfaces/server-data.interface';
import { MemberModel } from '../models/member.model';
import { EMissionType } from '../shared/data.type';

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
   * Load crew member from the given server data. {@see loadCrew()} MUST be
   * called subsequently in order to completely finish loading process.
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

  loadCrew(crew: MemberModel[]): void {
    this.all.forEach((mission, idx) => {
      if(EMissionType.away != mission.type) {
        return;
      }

      mission.steps.forEach((step, sidx) => {
        forOwn<MemberModel[]>(step.crew, (members, key) => {
          step.crew[key] = members.map(member => {
            let mem: MemberModel = member;
            if('number' == typeof member) {
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
    if(!member.missions[key]) {
      member.missions[key] = {};
    }

    // associate the mission
    if(!member.missions[key][idx]) {
      member.missions[key][idx] = {};
    }
    member.missions[key][idx].mission = mission;

    // associate mission step
    if(!member.missions[key][idx].steps) {
      member.missions[key][idx].steps = [];
    }
    member.missions[key][idx].steps.push(step);
  }
}
