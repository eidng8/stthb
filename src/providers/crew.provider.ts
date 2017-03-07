/*
 *  @author  eidng8
 *  @license https://creativecommons.org/licenses/by-sa/4.0/
 *  @link    https://github.com/eidng8/stthb
 */

import each from 'lodash-es/each';
import { Injectable } from '@angular/core';
import { IMember } from '../interfaces/member.interface';
import { IProvider } from '../interfaces/provider.interface';
import { MemberModel } from '../models/member.model';
import { DataService } from '../shared/data.service';
import { Factory } from '../shared/factory';

@Injectable()
/**
 * Fundamental crew data processing features
 */
export class CrewProvider implements IProvider {

  protected crew: MemberModel[];

  constructor(private factory: Factory, server: DataService) {
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
      this.crew[idx] = this.factory.member(data);
      /* TODO build various indices here */
    });
  }
}
