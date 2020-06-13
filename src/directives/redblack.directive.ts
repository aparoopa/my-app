import { Directive } from '@angular/core';
import {ElementRef} from '@angular/core';

@Directive({
  selector: '[appRedblack]'
})
export class RedblackDirective {

  constructor(private el:ElementRef) {
    console.log(el);//element on which it will be applied
    el.nativeElement.style.color ="blue";
  }


}
