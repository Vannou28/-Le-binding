import { Directive,ElementRef, OnInit, Renderer2, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appDisplayChangeColor]'
})
export class DisplayChangeColorDirective implements OnInit {

    @HostBinding('class.changeColorAndSize') isChangeColor:boolean=false;

    constructor() { }

    ngOnInit() {}

    @HostListener('mouseover') onMouseOver() {
        this.isChangeColor = true;
    }

    @HostListener('mouseout') onMouseOut() {
        this.isChangeColor = false;
    }


}
