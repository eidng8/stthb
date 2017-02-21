/*
 *  @author  eidng8
 *  @license https://creativecommons.org/licenses/by-sa/4.0/
 *  @link    https://github.com/eidng8/stthb
 */

import { Component, DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { CollapsibleDirective } from './collapsible.directive';
import { IonicModule } from 'ionic-angular';

@Component(
  {
    template: `
          <ion-list hbCollapsible>
            <ion-list-header>test header</ion-list-header>
            <ion-item>test item 1</ion-item>
            <ion-item>test item 2</ion-item>
          </ion-list>

          <ion-list hbCollapsible>
            <ion-list-header>test header 2</ion-list-header>
            <ion-item>test item 3</ion-item>
            <ion-item>test item 4</ion-item>
          </ion-list>

          <ion-list hbCollapsible>
            <ion-item>list no header</ion-item>
          </ion-list>

          <ion-list>
            <ion-list-header>list no collapse</ion-list-header>
            <ion-item>another item</ion-item>
          </ion-list>
    `
  })
class TestComponent {
}

describe('Directives:', () => {
  describe('Collapsible', () => {
    let fixture: ComponentFixture<TestComponent>;
    let lists: DebugElement[];
    let bareList: DebugElement;

    beforeEach(() => {
      fixture = TestBed.configureTestingModule(
        {
          declarations: [
            CollapsibleDirective,
            TestComponent,
          ],
          imports:      [
            IonicModule.forRoot(TestComponent),
          ]
        }).createComponent(TestComponent);
      fixture.detectChanges();

      // all elements with an attached CollapsibleDirective
      lists = fixture.debugElement.queryAll(By.directive(CollapsibleDirective));
      // the ion-list without the HighlightDirective
      bareList =
        fixture.debugElement.query(By.css('ion-list:not([hbCollapsible])'));
    });

    it('should have two collapsible lists', () => {
      expect(lists.length).toBe(3);
    });

    it('should collapse when header is clicked', () => {
      const header: DebugElement = lists[0].query(By.css('ion-list-header'));
      header.triggerEventHandler('click', null);
      expect(lists[0].nativeElement.classList)
        .toContain(CollapsibleDirective.cssClass);

      // shouldn't affect other lists
      expect(lists[1].nativeElement.classList)
        .not.toContain(CollapsibleDirective.cssClass);
      expect(lists[2].nativeElement.classList)
        .not.toContain(CollapsibleDirective.cssClass);
      expect(bareList.nativeElement.classList)
        .not.toContain(CollapsibleDirective.cssClass);
    });

    it('should expend when header is clicked twice', () => {
      const header: DebugElement = lists[0].query(By.css('ion-list-header'));
      header.triggerEventHandler('click', null);
      header.triggerEventHandler('click', null);
      expect(lists[0].nativeElement.classList)
        .not.toContain(CollapsibleDirective.cssClass);
    });

    it('should not collapse if there is no header', () => {
      lists[2].triggerEventHandler('click', null);
      expect(lists[2].nativeElement.classList)
        .not.toContain(CollapsibleDirective.cssClass);
    });

    it('should not collapse normal lists', () => {
      // tslint:disable-next-line no-string-literal
      expect(bareList.properties['customProperty']).toBeUndefined();
    });
  });
});
