import { Directive, Renderer2, HostListener, Input, ElementRef } from '@angular/core';

@Directive({
  selector: '[appBackground]'
})
export class BackgroundDirective {
  //recieve value from outside
@Input()  correctAnswer:boolean = false;

  constructor(public elRef: ElementRef, public renderer:Renderer2 ) {
   }
   @HostListener('click') onAnswerd(){

    if(this.correctAnswer)
this.renderer.setStyle(this.elRef.nativeElement,'background-color', 'green' );

   else 
this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'red');

   }

   }
  