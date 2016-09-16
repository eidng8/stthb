/**
 * Created by JC on 2016-09-11.
 */

import {Directive, ElementRef, Renderer} from '@angular/core';

const CLASS_NAME:string = 'collapsed';

@Directive(
  {
    // selectors like '[collapsible] ion-list-header' doesn't seem to
    // work. Does Angular use single level selector?
    // seems we have to use ngOnInit for this purpose.
    selector: '[collapsible]',
  })
export class Collapsible
{
  private elem:ElementRef;
  private renderer:Renderer;

  public constructor(el:ElementRef, renderer:Renderer)
  {
    this.elem = el;
    this.renderer = renderer;
  }

  public ngOnInit():any
  {
    // we are actually handling clicks to the header of the list,
    // instead of the list itself.
    // just to remember, event registration can't be done in constructor,
    // due to the fact that the HTML template is not processed yet.
    this.elem.nativeElement.getElementsByTagName('ion-list-header')[0]
      .addEventListener(
        'click', (evt:Event) =>
        {
          evt.preventDefault();
          evt.stopPropagation();

          if(this.elem.nativeElement.classList.contains(CLASS_NAME))
          {
            this.expend();
          }
          else
          {
            this.collapse();
          }
        });
  }

  private collapse():void
  {
    this.elem.nativeElement.classList.add(CLASS_NAME);
  }

  private expend():void
  {
    this.elem.nativeElement.classList.remove(CLASS_NAME);
  }
}
