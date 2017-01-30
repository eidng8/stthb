/*
 *  @author  eidng8
 *  @license https://creativecommons.org/licenses/by-sa/4.0/
 *  @link    https://github.com/eidng8/stthb
 */

import { TestBed, ComponentFixture } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA, DebugElement } from '@angular/core';
import { MissionListPageComponent } from './mission-list.page';

describe('Mission List Page:', () => {

  let comp: MissionListPageComponent;
  let fixture: ComponentFixture<MissionListPageComponent>;
  let de: DebugElement;

  beforeEach(() => {
    TestBed.configureTestingModule(
      {
        declarations: [MissionListPageComponent],
        // providers:    [{provide: NavController, useValue: NavController}],
        schemas:      [CUSTOM_ELEMENTS_SCHEMA],
      });
    fixture = TestBed.createComponent(MissionListPageComponent);
    // #trick
    // if you want to trigger ionViewWillEnter automatically de-comment the
    // following line
    // fixture.componentInstance.ionViewWillEnter();
    fixture.detectChanges();
    comp = fixture.componentInstance;
    de = fixture.debugElement;
  });

  describe('.constructor()', () => {
    it('Should be defined', () => {
      expect(comp).toBeDefined();
    });
  });

  // it('Should has welcome message', () => {
  //   expect(comp.message).toEqual('Welcome');
  // });
});
