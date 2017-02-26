/*
 *  @author  eidng8
 *  @license https://creativecommons.org/licenses/by-sa/4.0/
 *  @link    https://github.com/eidng8/stthb
 */

import {
  Component,
  DebugElement,
  ViewChildren,
  QueryList
} from '@angular/core';
import { By } from '@angular/platform-browser';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { IonicModule } from 'ionic-angular';
import { CollapsibleDirective } from './collapsible.directive';

@Component({
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
  @ViewChildren(CollapsibleDirective) lists: QueryList<CollapsibleDirective>;
}

describe('Directives:', () => {
  describe('Collapsible', () => {
    let fixture: ComponentFixture<TestComponent>;
    let lists: DebugElement[];
    let bareList: DebugElement;

    beforeEach(done => {
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

      fixture.whenStable().then(() => done());
    });

    it('should have 3 collapsible lists', () => {
      expect(lists.length).toBe(3);
    });

    it('should default to collapsed', () => {
      expect(lists[0].nativeElement.classList)
        .toContain(CollapsibleDirective.cssClass);
      expect(lists[1].nativeElement.classList)
        .toContain(CollapsibleDirective.cssClass);
      expect(lists[2].nativeElement.classList)
        .toContain(CollapsibleDirective.cssClass);
      expect(bareList.nativeElement.classList)
        .not.toContain(CollapsibleDirective.cssClass);
    }); // end should default to collapsed

    it('should not collapse normal lists', () => {
      expect(bareList.nativeElement.classList)
        .not.toContain(CollapsibleDirective.cssClass);
      // tslint:disable-next-line no-string-literal
      expect(bareList.properties['customProperty']).toBeUndefined();
    }); // end should not collapse normal lists

    it('should expend list', () => {
      fixture.componentInstance.lists.first.expend();
      fixture.detectChanges();
      expect(lists[0].nativeElement.classList)
        .not.toContain(CollapsibleDirective.cssClass);

      // shouldn't affect other lists
      expect(lists[1].nativeElement.classList)
        .toContain(CollapsibleDirective.cssClass);
      expect(lists[2].nativeElement.classList)
        .toContain(CollapsibleDirective.cssClass);
      expect(bareList.nativeElement.classList)
        .not.toContain(CollapsibleDirective.cssClass);
    }); // end should expend list

    it('should collapse list', () => {
      fixture.componentInstance.lists.first.expend();
      fixture.detectChanges();
      fixture.componentInstance.lists.first.collapse();
      fixture.detectChanges();
      expect(lists[0].nativeElement.classList)
        .toContain(CollapsibleDirective.cssClass);

      // shouldn't affect other lists
      expect(lists[1].nativeElement.classList)
        .toContain(CollapsibleDirective.cssClass);
      expect(lists[2].nativeElement.classList)
        .toContain(CollapsibleDirective.cssClass);
      expect(bareList.nativeElement.classList)
        .not.toContain(CollapsibleDirective.cssClass);
    }); // end should collapse list

    it('should toggle list expension', () => {
      fixture.componentInstance.lists.first.toggle();
      fixture.detectChanges();
      expect(lists[0].nativeElement.classList)
        .not.toContain(CollapsibleDirective.cssClass);

      fixture.componentInstance.lists.first.toggle();
      fixture.detectChanges();
      expect(lists[0].nativeElement.classList)
        .toContain(CollapsibleDirective.cssClass);
    }); // end should toggle list expension

    it('should collapse when header is clicked', () => {
      const header: DebugElement = lists[0].query(By.css('ion-list-header'));
      header.triggerEventHandler('click', null);
      fixture.detectChanges();
      fixture.whenStable().then(() => {
        expect(lists[0].nativeElement.classList)
          .not.toContain(CollapsibleDirective.cssClass);

        // shouldn't affect other lists
        expect(lists[1].nativeElement.classList)
          .toContain(CollapsibleDirective.cssClass);
        expect(lists[2].nativeElement.classList)
          .toContain(CollapsibleDirective.cssClass);
        expect(bareList.nativeElement.classList)
          .not.toContain(CollapsibleDirective.cssClass);
      });
    }); // end should collapse when header is clicked

    it('should expend when header is clicked twice', () => {
      const header: DebugElement = lists[0].query(By.css('ion-list-header'));
      header.triggerEventHandler('click', null);
      fixture.detectChanges();
      header.triggerEventHandler('click', null);
      fixture.detectChanges();
      fixture.whenStable().then(() => {
        expect(lists[0].nativeElement.classList)
          .toContain(CollapsibleDirective.cssClass);
      });
    }); // end should expend when header is clicked twice

    it('should not collapse if there is no header', () => {
      lists[2].triggerEventHandler('click', null);
      fixture.detectChanges();
      fixture.whenStable().then(() => {
        expect(lists[2].nativeElement.classList)
          .toContain(CollapsibleDirective.cssClass);
      });
    }); // end should not collapse if there is no header

  });

});
