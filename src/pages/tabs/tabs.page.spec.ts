/*
 *  @author  eidng8
 *  @license https://creativecommons.org/licenses/by-sa/4.0/
 *  @link    https://github.com/eidng8/stthb
 */

import { TestBed, ComponentFixture } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA, DebugElement } from '@angular/core';
import { TabsPageComponent } from './tabs.page';
import {
  HomePageComponent,
  CrewListPageComponent,
  MissionListPageComponent
} from '..';

describe('Tabs Page:', () => {

  let comp: TabsPageComponent;
  let fixture: ComponentFixture<TabsPageComponent>;
  let de: DebugElement;

  beforeEach(() => {
    TestBed.configureTestingModule(
      {
        declarations: [TabsPageComponent],
        schemas:      [CUSTOM_ELEMENTS_SCHEMA],
      });
    fixture = TestBed.createComponent(TabsPageComponent);
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

  it('Should have Home tab', () => {
    console.log(comp.home);
    expect(comp.home).toEqual(HomePageComponent);
  });

  it('Should have Crew tab', () => {
    console.log(comp.crew);
    expect(comp.crew).toEqual(CrewListPageComponent);
  });

  it('Should have Missions tab', () => {
    console.log(comp.missions);
    expect(comp.missions).toEqual(MissionListPageComponent);
  });
});
