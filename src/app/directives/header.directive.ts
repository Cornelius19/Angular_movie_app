import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHeader]'
})
export class HeaderDirective {

  constructor(private p:ElementRef) {
    this.p.nativeElement.style.backgroundColor = 'yellow';


  }

}
