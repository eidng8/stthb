/*
 *  @author  eidng8
 *  @license https://creativecommons.org/licenses/by-sa/4.0/
 *  @link    https://github.com/eidng8/stthb
 */

import { TestBed, ComponentFixture } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA, DebugElement } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HomePage } from '../home.page';

describe('Pages:', () => {

  describe('Splash Page', () => {

    let comp: HomePage;
    let fixture: ComponentFixture<HomePage>;
    let de: DebugElement;

    const dispatch: jasmine.Spy = jasmine.createSpy('dispatch');

    beforeEach(() => {
      TestBed.configureTestingModule(
        {
          declarations: [HomePage],
          providers:    [{provide: NavController, useValue: {dispatch}}],
          schemas:      [CUSTOM_ELEMENTS_SCHEMA],
        });
      fixture = TestBed.createComponent(HomePage);

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

    // it('should jump to tab page', () => {
    //   expect(dispatch).toHaveBeenCalledWith(TabsPage);
    // });

  }); // end Splash Page

}); // end Pages
