/*
 *  @author  eidng8
 *  @license https://creativecommons.org/licenses/by-sa/4.0/
 *  @link    https://github.com/eidng8/stthb
 */

import { Directive, ElementRef, Renderer, OnInit } from '@angular/core';

@Directive(
  {
    // selectors like `'[collapsible] ion-list-header'` doesn't seem to
    // work. Does Angular use single level selector?
    // seems we have to use ngOnInit for this purpose.
    selector: '[hbCollapsible]',
  })
export class CollapsibleDirective implements OnInit {
  static readonly cssClass: string = 'collapsed';

  private elem: ElementRef;
  private renderer: Renderer;

  public constructor(el: ElementRef, renderer: Renderer) {
    this.elem = el;
    this.renderer = renderer;
  }

  public ngOnInit(): any {
    // we are actually handling clicks to the header of the list,
    // instead of the list itself.
    // just to remember, event registration can't be done in constructor,
    // due to the fact that the HTML template is not processed yet.
    let header: HTMLElement =
      this.elem.nativeElement.getElementsByTagName('ion-list-header')[0];
    if(header) {
      this.renderer.listen(header, 'click', () => {
        if(this.elem.nativeElement.classList.contains(
            CollapsibleDirective.cssClass)) {
          this.expend();
        }
        else {
          this.collapse();
        }
      });
    }
  }

  private collapse(): void {
    this.elem.nativeElement.classList.add(CollapsibleDirective.cssClass);
  }

  private expend(): void {
    this.elem.nativeElement.classList.remove(CollapsibleDirective.cssClass);
  }
}
