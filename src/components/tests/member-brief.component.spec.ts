/*
 *  @author  eidng8
 *  @license https://creativecommons.org/licenses/by-sa/4.0/
 *  @link    https://github.com/eidng8/stthb
 */

import { Component, DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { IonicModule } from 'ionic-angular';
import { MemberModel } from '../../models/member.model';
import { SkillsModel } from '../../models/skills.model';
import { MemberBriefComponent } from '../member-brief.component';
import { SkillComponent } from '../skill.component';

@Component({
  template: '<jc-member-brief [member]="member"></jc-member-brief>',
})
class TestComponent {
  member: MemberModel;

  constructor() {
    const member: MemberModel = new MemberModel();
    member.character = 'a char';
    member.name = 'a member name';
    member.picture = 'thumbnail';
    member.race = 'a race';
    member.stars = 3;
    member.traits = ['just', 'a', 'trait'];
    member.skills = new SkillsModel();
    member.skills.set('cmd', [1, 2, 3]);
    member.skills.set('dip', [4, 5, 6]);
    member.skills.set('sec', [444, 445, 446]);
    member.skills.set('med', [9999, 999, 9999]);
    this.member = member;
  }
}

describe('Components:', () => {
  describe('Member Brief Component', () => {
    let fixture: ComponentFixture<TestComponent>;
    let sut: DebugElement;

    beforeEach(done => {
      fixture = TestBed.configureTestingModule(
        {
          declarations: [
            SkillComponent,
            MemberBriefComponent,
            TestComponent,
          ],
          imports:      [
            IonicModule.forRoot(TestComponent),
          ]
        }).createComponent(TestComponent);
      fixture.detectChanges();

      sut = fixture.debugElement.query(By.css('jc-member-brief'));

      fixture.whenStable().then(() => done());
    });

    it('should have been created', () => {
      expect(sut).not.toBeNull();
    });

    it('should have rarity', () => {
      expect(sut.query(By.css('.rarity-rare'))).not.toBeNull();
    }); // end should have thumbnail

    it('should have thumbnail', () => {
      expect(sut.query(By.css('ion-thumbnail'))).not.toBeNull();
    }); // end should have thumbnail

    it('should have stars', () => {
      expect(sut.query(By.css('.rarity-stars'))).not.toBeNull();
    }); // end should have thumbnail

    it('should have name', () => {
      expect(
        sut.query(By.css('h2')).nativeElement.textContent)
        .toBe('a member name');
    }); // end should have name

    it('should have skills', () => {
      const skills: DebugElement[] = sut.queryAll(By.css('jc-skill'));
      expect(skills.length).toBe(4);
      expect(sut.query(By.css('jc-skill .skill-icon.skill-cmd')))
        .not.toBeNull();
      expect(sut.query(By.css('jc-skill .skill-icon.skill-dip')))
        .not.toBeNull();
      expect(sut.query(By.css('jc-skill .skill-icon.skill-sec')))
        .not.toBeNull();

      const med: DebugElement = sut.query(
        By.css('jc-skill .skill-icon.skill-med + .skill-values'));
      expect(med).not.toBeNull();
      expect(med.nativeElement.textContent.trim())
        .toBe('10998 - 19998');
    }); // end should have skills
  });

});
