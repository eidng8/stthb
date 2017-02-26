/*
 *  @author  eidng8
 *  @license https://creativecommons.org/licenses/by-sa/4.0/
 *  @link    https://github.com/eidng8/stthb
 */

import find from 'lodash-es/find';
import sumBy from 'lodash-es/sumBy';
import {
  Directive,
  ElementRef,
  AfterViewInit,
  AfterViewChecked,
  HostBinding,
  Renderer
} from '@angular/core';

@Directive({
  selector: '[hb-ollapsible]',
})
export class CollapsibleDirective implements AfterViewInit, AfterViewChecked {
  static readonly cssClass: string = 'collapsed';

  @HostBinding(`class.${CollapsibleDirective.cssClass}`)
  private _collapsed: boolean = true;

  constructor(private _elem: ElementRef, private _renderer: Renderer) {
  }

  ngAfterViewChecked(): void {
    // can't use host binding here, otherwise angular will
    // throw EXCEPTION: Expression has changed after it was checked.
    this._elem.nativeElement.style.maxHeight = this.calcHeight() + 'px';
  }

  ngAfterViewInit(): void {
    // we are actually handling clicks to the header of the list,
    // instead of the list itself.
    // just to remember, event registration can't be done in constructor,
    // due to the fact that the HTML template is not processed yet.
    this.attachEvent(this.getHeader());
  }

  toggle(): void {
    this._collapsed = !this._collapsed;
  }

  collapse(): void {
    this._collapsed = true;
  }

  expend(): void {
    this._collapsed = false;
  }

  /**
   * Attach the `click` event handler to list header
   * @param header
   */
  private attachEvent(header: HTMLElement): void {
    if(!header) {
      return;
    }

    this._renderer.listen(header, 'click', () => this.toggle());
  }

  /**
   * Get the list header
   */
  private getHeader(): HTMLElement {
    return find(
      this.getDirectChildren(),
      (elem: HTMLElement) => 'ion-list-header' == elem.tagName.toLowerCase());
  }

  /**
   * Can't find a way to get direct children without using `navtiveElement`
   */
  private getDirectChildren(): HTMLElement[] {
    return this._elem.nativeElement.children
      ? this._elem.nativeElement.children : [];
  }

  private calcHeight(): number {
    return sumBy(this.getDirectChildren(), elem => elem.offsetHeight);
  }
}
