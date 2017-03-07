/*
 *  @author  eidng8
 *  @license https://creativecommons.org/licenses/by-sa/4.0/
 *  @link    https://github.com/eidng8/stthb
 */

import { By } from '@angular/platform-browser';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA, DebugElement } from '@angular/core';
import { CrewPage } from '../crew.page';
import { NavController } from 'ionic-angular';
import { provideMockDataService } from '../../testing/data.service.mock';
import { Factory } from '../../shared/factory';
import { CrewProvider } from '../../providers/crew.provider';

describe('Pages:', () => {
  describe('Crew List', () => {

    let comp: CrewPage;
    let fixture: ComponentFixture<CrewPage>;
    let de: DebugElement;

    beforeEach(() => {
      TestBed.configureTestingModule(
        {
          declarations: [CrewPage],
          providers:    [
            {provide: NavController, useValue: NavController},
            provideMockDataService,
            Factory,
            CrewProvider,
          ],
          schemas:      [CUSTOM_ELEMENTS_SCHEMA],
        });
      fixture = TestBed.createComponent(CrewPage);

      // #trick
      // if you want to trigger ionViewWillEnter automatically de-comment the
      // following line
      // fixture.componentInstance.ionViewWillEnter();
      fixture.detectChanges();
      comp = fixture.componentInstance;
      de = fixture.debugElement;
    });

    it('should have been created', () => {
      expect(comp).toBeDefined();
      expect(comp).not.toBeNull();
    });

    it('should list all crew members', () => {
      expect(de.queryAll(By.css('jc-member-brief')).length)
        .toBe(comp.crew.count);
    });

  });
});
