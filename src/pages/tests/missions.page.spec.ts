/*
 *  @author  eidng8
 *  @license https://creativecommons.org/licenses/by-sa/4.0/
 *  @link    https://github.com/eidng8/stthb
 */

import { TestBed, ComponentFixture } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA, DebugElement } from '@angular/core';
import { MissionsPage } from '../missions.page';
import { NavController } from 'ionic-angular';
import { MissionsProvider } from '../../providers/missions.provider';
import { IServerData } from '../../interfaces/server-data.interface';


const server: IServerData = require('../../../www/data.json');  // tslint:disable-line
const missionsProvider: MissionsProvider = new MissionsProvider();
missionsProvider.load(server);

describe('Pages:', () => {
  describe('Mission List', () => {

    let comp: MissionsPage;
    let fixture: ComponentFixture<MissionsPage>;
    let de: DebugElement;

    beforeEach(() => {
      TestBed.configureTestingModule(
        {
          declarations: [MissionsPage],
          providers:    [
            {provide: NavController, useValue: NavController},
            {provide: MissionsProvider, useValue: missionsProvider},
          ],
          schemas:      [CUSTOM_ELEMENTS_SCHEMA],
        });
      fixture = TestBed.createComponent(MissionsPage);
      // #trick
      // if you want to trigger ionViewWillEnter automatically de-comment the
      // following line
      // fixture.componentInstance.ionViewWillEnter();
      fixture.detectChanges();
      comp = fixture.componentInstance;
      de = fixture.debugElement;
    });

    it('Should be defined', () => {
      expect(comp).toBeDefined();
    });

    // it('Should has welcome message', () => {
    //   expect(comp.message).toEqual('Welcome');
    // });
  });
});
