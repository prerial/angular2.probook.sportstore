/**
 * Created by Mikhail on 4/18/2017.
 */
import { Directive, ElementRef } from '@angular/core';

@Directive({ selector: '[myHighlight]' })

export class HighlightDirective {
  constructor(el: ElementRef) {
    el.nativeElement.style.backgroundColor = 'yellow';
  }
}
