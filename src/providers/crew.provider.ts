/*
 *  @author  eidng8
 *  @license https://creativecommons.org/licenses/by-sa/4.0/
 *  @link    https://github.com/eidng8/stthb
 */

import each from 'lodash-es/each';
import { Injectable } from '@angular/core';
import { Factory } from '../shared/factory';
import { DataService } from '../shared/data.service';
import { MemberModel } from '../models/member.model';
import { IMember } from '../interfaces/member.interface';

@Injectable()
/**
 * Fundamental crew data processing features
 */
export class CrewProvider {

  protected crew: MemberModel[];

  constructor(private _factory: Factory, server: DataService) {
    this.load(server);
  }

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
   * Load crew member from the given server data
   */
  load(server: DataService): void {
    if(!(server instanceof DataService)) {
      return;
    }

    this.crew = [];
    each(server.crew, (data: IMember, idx: number) => {
      this.crew[idx] = this._factory.member(data);
      /* TODO build various indices here */
    });
  }
}
