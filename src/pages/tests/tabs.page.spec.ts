/*
 *  @author  eidng8
 *  @license https://creativecommons.org/licenses/by-sa/4.0/
 *  @link    https://github.com/eidng8/stthb
 */

import { TestBed, ComponentFixture } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA, DebugElement } from '@angular/core';
import { TabsPageComponent } from '../tabs.page';
import { HomePageComponent } from '../home.page';
import { CrewPageComponent } from '../crew.page';
import { MissionsPageComponent } from '../missions.page';

describe('Pages:', () => {
  describe('Tabs', () => {

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

    it('can be created', () => {
      expect(comp).toBeDefined();
    });

    it('should have Home tab', () => {
      console.log(comp.home);
      expect(comp.home).toEqual(HomePageComponent);
    });

    it('should have Crew tab', () => {
      console.log(comp.crew);
      expect(comp.crew).toEqual(CrewPageComponent);
    });

    it('should have Missions tab', () => {
      console.log(comp.missions);
      expect(comp.missions).toEqual(MissionsPageComponent);
    });
  });
});
