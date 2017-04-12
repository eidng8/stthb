/*
 *  @author  eidng8
 *  @license https://creativecommons.org/licenses/by-sa/4.0/
 *  @link    https://github.com/eidng8/stthb
 */

import { Injectable } from '@angular/core';
import { IMember } from '../interfaces/member.interface';
import { IProvider } from '../interfaces/provider.interface';
import { MemberModel } from '../models/member.model';
import { DataService } from '../shared/data.service';

/**
 * Fundamental crew data processing features
 */
@Injectable()
export class CrewProvider implements IProvider<MemberModel> {

  /**
   * All parsed members
   */
  protected crew: MemberModel[] = [];

  /**
   * Member name index;
   */
  protected names: { [key: string]: MemberModel } = {};

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
    return this.crew[idx];
  }

  named(name: string): MemberModel {
    return this.names[name];
  }

  /**
   * Load crew member from the given server data
   */
  load(crew: IMember[], data: DataService): void {
    if (!crew || !crew.length || !data.ready) {
      return;
    }

    this.crew  = [];
    this.names = {};
    crew.forEach((member: IMember, idx: number) => {
      // load given data into model
      this.crew[idx] = new MemberModel();
      this.crew[idx].load(member, data);

      // update name index
      this.names[member.name] = this.crew[idx];
    });
  }
}
