/*
 *  @author  eidng8
 *  @license https://creativecommons.org/licenses/by-sa/4.0/
 *  @link    https://github.com/eidng8/stthb
 */

import { Injectable } from '@angular/core';
import { IMember } from '../interfaces/member.interface';
import { IProvider } from '../interfaces/provider.interface';
import { MemberModel } from '../models/member.model';
import { IServerData } from '../interfaces/server-data.interface';

@Injectable()
/**
 * Fundamental crew data processing features
 */
export class CrewProvider implements IProvider {

  protected crew: MemberModel[] = [];

  /**
   * Returns all crew members
   */
  get all(): MemberModel[] {
    return this.crew;
  }

  get count(): number {
    return this.crew.length;
  }

  /**
   * Get member by index
   */
  get(idx: number): MemberModel {
    return this.all[idx];
  }

  /**
   * Load crew member from the given server data
   */
  load(data: IServerData): void {
    if(!data || !data.crew) {
      return;
    }

    this.crew = [];
    data.crew.forEach((member: IMember, idx: number) => {
      this.crew[idx] = new MemberModel();
      this.crew[idx].load(member, data);
      /* TODO build various indices here */
    });
  }
}
