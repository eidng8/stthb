/*
 *  @author  eidng8
 *  @license https://creativecommons.org/licenses/by-sa/4.0/
 *  @link    https://github.com/eidng8/stthb
 */

import { IDataModel } from '../interfaces/data-model.interface';
import { IStep } from '../interfaces/step.interface';
import { DataService } from '../shared/data.service';
import { MemberModel } from './member.model';

export type TMissionCrew = {
  critical?: MemberModel[]; pass?: MemberModel[]; unlock?: MemberModel[];
};

export class StepModel implements IDataModel<IStep> {

  protected dataService: DataService;

  private _alt: string[];
  private _bonus: number[][];
  private _crew: TMissionCrew;
  private _images: string[];
  private _locks: number[][];
  private _name: string;
  private _req: number[][];
  private _skills: number[];
  private _traits: number[][];

  get alt(): string[] {
    return this._alt;
  }

  get bonus(): number[][] {
    return this._bonus;
  }

  get crew(): TMissionCrew {
    return this._crew;
  }

  get images(): string[] {
    return this._images;
  }

  /**
   * List of traits that unlock alternatives
   *
   * NOTE: Do not call this property in quick succession.
   * Use temporary variable instead.
   */
  get locks(): string[][] {
    return this._locks.map(traits => traits ? traits.map(
      trait => trait ? this.dataService.traits[trait] : null) : null);
  }

  get name(): string {
    return this._name;
  }

  get req(): number[][] {
    return this._req;
  }

  /**
   * List of skills used in all alternatives
   *
   * NOTE: Do not call this property in quick succession.
   * Use temporary variable instead.
   */
  get skills(): string[] {
    return this._skills.map(skill => this.dataService.skills[skill]);
  }

  get traits(): string[][] {
    return this._traits.map(traits => traits ? traits.map(
      trait => trait ? this.dataService.traits[trait] : null) : null);
  }

  /**
   * Load data form the given step
   * @param step
   * @param data
   */
  load(step: IStep, data: DataService): void {
    this.dataService = data;

    /* We don't want to mutate base data, deep-clone everything! */
    this._alt    = step.alt ? JSON.parse(JSON.stringify(step.alt)) : [];
    this._bonus  = step.bonus ? JSON.parse(JSON.stringify(step.bonus)) : [];
    this._images = step.images ? JSON.parse(JSON.stringify(step.images)) : [];
    this._locks  = step.locks ? JSON.parse(JSON.stringify(step.locks)) : [];
    this._name   = step.name;
    this._req    = step.req ? JSON.parse(JSON.stringify(step.req)) : [];
    this._crew   = step.crew ? JSON.parse(JSON.stringify(step.crew)) : [];
    this._skills = step.skills ? step.skills.slice() : [];
  }
}
