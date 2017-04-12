/*
 *  @author  eidng8
 *  @license https://creativecommons.org/licenses/by-sa/4.0/
 *  @link    https://github.com/eidng8/stthb
 */
/// <reference path="../../testing/matchers.d.ts" />
import { Component, DebugElement } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { IonicModule } from 'ionic-angular';
import { IMember } from '../../interfaces/member.interface';
import { MemberModel } from '../../models/member.model';
import { toBeWikiUrl } from '../../testing/matchers';
import { SkillComponent } from '../skill/skill.component';
import { MemberBriefComponent } from './member-brief.component';

@Component({
  template: '<jc-member-brief [member]="member"></jc-member-brief>',
})
class TestComponent {
  member: MemberModel;

  mockService: any = require('../../testing/crew-test.data.json');  // tslint:disable-line

  mockData: IMember = this.mockService.crew[1];

  constructor() {
    this.member = new MemberModel();
    this.member.load(this.mockData, this.mockService);
  }
}

describe('Components:', () => {

  describe('Member Brief Component', () => {

    let fixture: ComponentFixture<TestComponent>;
    let sut: DebugElement;

    beforeAll((done) => {
      jasmine.addMatchers({toBeWikiUrl});

      fixture = TestBed.configureTestingModule({
        declarations: [SkillComponent, MemberBriefComponent, TestComponent],
        imports:      [IonicModule.forRoot(TestComponent)],
      }).createComponent(TestComponent);
      fixture.detectChanges();

      fixture.whenStable().then(() => {
        sut = fixture.debugElement.query(By.css('jc-member-brief'));
        done();
      }, () => fail());
    });

    it('should have been created', () => {
      expect(sut).not.toBeNull();
    });

    it('should have rarity', () => {
      expect(sut.nativeElement.classList).toContain('rarity-super-rare');
    }); // end should have thumbnail

    it('should have thumbnail', () => {
      expect(sut.query(By.css('ion-thumbnail'))).not.toBeNull();
    }); // end should have thumbnail

    it('should have stars', () => {
      expect(sut.query(By.css('.rarity-stars'))).not.toBeNull();
    }); // end should have thumbnail

    it('should have name', () => {
      expect(sut.query(By.css('h2'))).not.toBeNull();
      expect(sut.query(By.css('h2')).nativeElement.textContent)
        .toBe('1701 Jadzia Dax');
    }); // end should have name

    it('should have skills', () => {
      expect(sut.query(By.css('jc-skill'))).not.toBeNull();
      const skills: DebugElement[] = sut.queryAll(By.css('jc-skill'));
      expect(skills.length).toBe(3);
      expect(sut.query(By.css('.skill-icon.skill-eng'))).not.toBeNull();
      expect(sut.query(By.css('.skill-icon.skill-sci'))).not.toBeNull();
      expect(sut.query(By.css('.skill-icon.skill-sec'))).not.toBeNull();

      const med: DebugElement = sut.query(
        By.css('jc-skill .skill-icon.skill-sec + .skill-values'));
      expect(med).not.toBeNull();
      expect(med.nativeElement.textContent.trim())
        .toMatch(/\s*301\s*60\s*122\s*/);
    }); // end should have skills

    it('should show thumbnail from wiki', async(() => {
      fixture.whenStable().then(() => {
        const images: DebugElement[] = sut.queryAll(
          By.css('ion-thumbnail img'));
        images.forEach(img => {
          expect(img.nativeElement.src).toBeWikiUrl();
        });
      });
    })); // end should show thumbnail from wiki
  });

});
