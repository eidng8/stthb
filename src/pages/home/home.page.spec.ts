/*
 *  @author  eidng8
 *  @license https://creativecommons.org/licenses/by-sa/4.0/
 *  @link    https://github.com/eidng8/stthb
 */

import { HomePageComponent } from './home.page';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA, DebugElement } from '@angular/core';
import { NavController } from 'ionic-angular';

describe('Home Page:', () => {

  let comp: HomePageComponent;
  let fixture: ComponentFixture<HomePageComponent>;
  let de: DebugElement;

  beforeEach(() => {
    TestBed.configureTestingModule(
      {
        declarations: [HomePageComponent],
        providers:    [{provide: NavController, useValue: NavController}],
        schemas:      [CUSTOM_ELEMENTS_SCHEMA],
      });
    fixture = TestBed.createComponent(HomePageComponent);
    // #trick
    // if you want to trigger ionViewWillEnter automatically de-comment the
    // following line
    // fixture.componentInstance.ionViewWillEnter();
    fixture.detectChanges();
    comp = fixture.componentInstance;
    de = fixture.debugElement;
  });

  describe('.constructor()', () => {
    it(
      'Should be defined', () => {
        expect(comp).toBeDefined();
      });
  });

  it('Should has welcome message', () => {
    expect(comp.message).toEqual('Welcome');
  });
  ``
});
