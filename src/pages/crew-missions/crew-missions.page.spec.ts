/*
 *  @author  eidng8
 *  @license https://creativecommons.org/licenses/by-sa/4.0/
 *  @link    https://github.com/eidng8/stthb
 */

import { TestBed, ComponentFixture } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA, DebugElement } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { MissionsProvider } from '../../providers/missions.provider';
import { IServerData } from '../../interfaces/server-data.interface';
import { CrewMissionsPage } from './crew-missions.page';
import { CrewProvider } from '../../providers/crew.provider';

describe('Pages:', () => {

  describe('Crew Mission List', () => {

    let comp: CrewMissionsPage;
    let fixture: ComponentFixture<CrewMissionsPage>;
    let de: DebugElement;
    let server: IServerData;
    let crewProvider: CrewProvider;
    let missionsProvider: MissionsProvider;

    beforeAll(() => {
      server = require('../../testing/mission-test.data.json');  // tslint:disable-line
      crewProvider = new CrewProvider();
      crewProvider.load(server);
      missionsProvider = new MissionsProvider();
      missionsProvider.load(server);
      missionsProvider.loadCrew(crewProvider.all);
    }); // end beforeAll()

    beforeEach(() => {
      TestBed.configureTestingModule(
        {
          declarations: [CrewMissionsPage],
          providers:    [
            {
              provide:  NavParams,
              useValue: new NavParams({member: crewProvider.get(0)}),
            },
            {provide: NavController, useValue: NavController},
            {provide: MissionsProvider, useValue: missionsProvider},
            {provide: CrewProvider, useValue: crewProvider},
          ],
          schemas:      [CUSTOM_ELEMENTS_SCHEMA],
        });
      fixture = TestBed.createComponent(CrewMissionsPage);
      // #trick
      // if you want to trigger ionViewWillEnter automatically de-comment the
      // following line
      // fixture.componentInstance.ionViewWillEnter();
      fixture.detectChanges();
      comp = fixture.componentInstance;
      de = fixture.debugElement;
    });

    it('should be defined', () => {
      expect(comp).toBeDefined();
    });

    // it('Should has welcome message', () => {
    //   expect(comp.message).toEqual('Welcome');
    // });
  });

});
