/*
 *  @author  eidng8
 *  @license https://creativecommons.org/licenses/by-sa/4.0/
 *  @link    https://github.com/eidng8/stthb
 */

import { Component, DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { IonicModule } from 'ionic-angular';
import { SkillComponent } from './skill.component';
import { SkillModel } from '../../models/skill.model';

@Component({
  template: '<jc-skill [skill]="skill"></jc-skill>',
})
class TestComponent {
  skill: SkillModel = new SkillModel('cmd', [2, 3, 4]);
}

describe('Components:', () => {
  describe('Skill Component', () => {
    let fixture: ComponentFixture<TestComponent>;
    let sut: DebugElement;

    beforeEach(done => {
      fixture = TestBed.configureTestingModule(
        {
          declarations: [
            SkillComponent,
            TestComponent,
          ],
          imports:      [
            IonicModule.forRoot(TestComponent),
          ]
        }).createComponent(TestComponent);
      fixture.detectChanges();

      sut = fixture.debugElement.query(By.css('jc-skill'));

      fixture.whenStable().then(() => done());
    });

    it('should have been created', () => {
      expect(sut).toBeDefined();
    });

    it('should have skill icon', () => {
      expect(sut.query(By.css('.skill-cmd-icon'))).toBeDefined();
    }); // end should has icon

    it('should have skill values', () => {
      expect(
        sut.query(By.css('.skill-values')).nativeElement.textContent)
        .toMatch(/\s*2\s*3\s*4\s*/);
    }); // end should have skill values

  });

});
