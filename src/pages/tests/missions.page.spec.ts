/*
 *  @author  eidng8
 *  @license https://creativecommons.org/licenses/by-sa/4.0/
 *  @link    https://github.com/eidng8/stthb
 */

import { TestBed, ComponentFixture } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA, DebugElement } from '@angular/core';
import { MissionsPageComponent } from '../missions.page';

describe('Pages:', () => {
  describe('Mission List', () => {

    let comp: MissionsPageComponent;
    let fixture: ComponentFixture<MissionsPageComponent>;
    let de: DebugElement;

    beforeEach(() => {
      TestBed.configureTestingModule(
        {
          declarations: [MissionsPageComponent],
          // providers:    [{provide: NavController, useValue: NavController}],
          schemas:      [CUSTOM_ELEMENTS_SCHEMA],
        });
      fixture = TestBed.createComponent(MissionsPageComponent);
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
