/*
 *  @author  eidng8
 *  @license https://creativecommons.org/licenses/by-sa/4.0/
 *  @link    https://github.com/eidng8/stthb
 */

import { TestBed, ComponentFixture } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA, DebugElement } from '@angular/core';
import { TabsPage } from '../tabs.page';
import { HomePage } from '../home.page';
import { CrewPage } from '../crew.page';
import { MissionsPage } from '../missions.page';

describe('Pages:', () => {
  describe('Tabs', () => {

    let comp: TabsPage;
    let fixture: ComponentFixture<TabsPage>;
    let de: DebugElement;

    beforeEach(() => {
      TestBed.configureTestingModule(
        {
          declarations: [TabsPage],
          schemas:      [CUSTOM_ELEMENTS_SCHEMA],
        });
      fixture = TestBed.createComponent(TabsPage);
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
      expect(comp.home).toEqual(HomePage);
    });

    it('should have Crew tab', () => {
      console.log(comp.crew);
      expect(comp.crew).toEqual(CrewPage);
    });

    it('should have Missions tab', () => {
      console.log(comp.missions);
      expect(comp.missions).toEqual(MissionsPage);
    });
  });
});
