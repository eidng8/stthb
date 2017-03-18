/*
 *  @author  eidng8
 *  @license https://creativecommons.org/licenses/by-sa/4.0/
 *  @link    https://github.com/eidng8/stthb
 */

import { By } from '@angular/platform-browser';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA, DebugElement } from '@angular/core';
import { CrewPage } from './crew.page';
import { NavController } from 'ionic-angular';
import { CrewProvider } from '../../providers/crew.provider';
import { MemberBriefComponent } from '../../components/member-brief.component';
import { IServerData } from '../../interfaces/server-data.interface';

describe('Pages:', () => {

  describe('Crew List', () => {

    let comp: CrewPage;
    let fixture: ComponentFixture<CrewPage>;
    let de: DebugElement;

    const crewProvider: CrewProvider = new CrewProvider();

    beforeAll(() => {
      const server: IServerData = require('../../testing/crew-test.data.json');  // tslint:disable-line
      crewProvider.load(server);
    }); // end beforeAll()

    beforeEach(done => {
      TestBed.configureTestingModule(
        {
          declarations: [MemberBriefComponent, CrewPage],
          providers:    [
            {provide: NavController, useValue: NavController},
            {provide: CrewProvider, useValue: crewProvider},
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
      fixture.whenStable().then(() => done());
    });

    it('should have been created', () => {
      expect(comp).toBeDefined();
      expect(comp).not.toBeNull();
    });

    it('should list all crew members', () => {
      expect(de.queryAll(By.css('jc-member-brief')).length)
        .toBe(comp.crew.count);
    });

    it('should list all rarities', () => {
      expect(de.queryAll(By.css('.rarity-common')).length)
        .toBeGreaterThan(0);
      expect(de.queryAll(By.css('.rarity-uncommon')).length)
        .toBeGreaterThan(0);
      expect(de.queryAll(By.css('.rarity-rare')).length)
        .toBeGreaterThan(0);
      expect(de.queryAll(By.css('.rarity-super-rare')).length)
        .toBeGreaterThan(0);
      expect(de.queryAll(By.css('.rarity-legendary')).length)
        .toBeGreaterThan(0);
    });

  }); // end crew List

}); // end Pages: