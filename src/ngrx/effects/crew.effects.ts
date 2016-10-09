/**
 * Created by JC on 2016-10-06.
 */

import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';
import {Actions, Effect} from '@ngrx/effects';
import {CrewActions} from '../actions';
import {CrewService} from '../../services/crew.service';
import {Action} from '@ngrx/store';

@Injectable()
export class CrewEffects
{

  @Effect() public load$:Observable<Action> = this
    .update$
    .ofType(CrewActions.LOAD_CREW)
    .switchMap(() => this.crewService.get())
    .map(crew => this.crewActions.loadCrewDone(crew));

  public constructor(
    private update$:Actions, private crewActions:CrewActions,
    private crewService:CrewService)
  {
  }
}
