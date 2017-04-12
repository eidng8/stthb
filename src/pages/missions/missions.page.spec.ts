/*
 *  @author  eidng8
 *  @license https://creativecommons.org/licenses/by-sa/4.0/
 *  @link    https://github.com/eidng8/stthb
 */

import { CUSTOM_ELEMENTS_SCHEMA, DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NavController } from 'ionic-angular';
import { IServerData } from '../../interfaces/server-data.interface';
import { MissionsProvider } from '../../providers/missions.provider';
import { MissionsPage } from './missions.page';

describe('Pages:', () => {

  describe('Mission List', () => {

    let comp: MissionsPage;
    let fixture: ComponentFixture<MissionsPage>;
    let de: DebugElement;
    let server: IServerData;
    let missionsProvider: MissionsProvider;

    beforeAll(() => {
      server           = require('../../testing/mission-test.data.json');  // tslint:disable-line
      missionsProvider = new MissionsProvider();
      missionsProvider.load(server.missions, server as any);
    }); // end beforeAll()

    beforeEach(() => {
      TestBed.configureTestingModule({
        declarations: [MissionsPage], providers: [
          {
            provide: NavController, useValue: NavController,
          }, {
            provide: MissionsProvider, useValue: missionsProvider,
          },
        ], schemas:   [CUSTOM_ELEMENTS_SCHEMA],
      });
      fixture = TestBed.createComponent(MissionsPage);
      // #trick
      // if you want to trigger ionViewWillEnter automatically de-comment the
      // following line
      // fixture.componentInstance.ionViewWillEnter();
      fixture.detectChanges();
      comp = fixture.componentInstance;
      de   = fixture.debugElement;
    });

    it('Should be defined', () => {
      expect(comp).toBeDefined();
    });

    // it('Should has welcome message', () => {
    //   expect(comp.message).toEqual('Welcome');
    // });
  });

});
