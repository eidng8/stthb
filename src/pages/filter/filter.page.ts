/**
 * Created by JC on 2016-10-07.
 */

import {Observable} from 'rxjs';
import {Store} from '@ngrx/store';
import {Component, ChangeDetectionStrategy} from '@angular/core';
import {NavController} from 'ionic-angular';
import {PageBase} from '../base';
import {IAppState, FilterActions, IFilters} from '../../ngrx';

@Component(
  {
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl:     'filter.html',
  })
export class FilterPage extends PageBase
{
  public filters:Observable<IFilters>;

  private _skills:string[] = ['cmd', 'eng'];

  public constructor(
    nav:NavController, private _store:Store<IAppState>,
    private _actions:FilterActions)
  {
    super(nav);
    this.filters = this._store.select<IFilters>('filters');
    this._store.dispatch(this._actions.addSkillFilter(['cmd', 'sec']));
  }

  public get skills():string[]
  {
    return this._skills;
  }

  public set skills(value:string[])
  {
    this._skills = value;
    this._store.dispatch(this._actions.addSkillFilter(value));
  }
}
