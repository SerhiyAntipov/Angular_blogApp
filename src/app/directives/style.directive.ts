import {Directive, ElementRef, HostListener, Renderer2} from "@angular/core";
import {colors} from "@angular/cli/utilities/color";
import {style} from "@angular/animations";

@Directive({
    selector: '[appStyle]'
})
export class StyleDirective {

    constructor(private elRef: ElementRef, private renderer: Renderer2) {
        // console.log(elRef)
        // this.elRef.nativeElement.style.color = 'red'
        // this.renderer.setStyle(this.elRef.nativeElement, 'color', 'blue')
    }
    @HostListener('click', ['$event']) onClick(event){
        console.log(event)
    }

    @HostListener('mouseenter') onEnter(){
        this.renderer.setStyle( this.elRef.nativeElement, 'color', 'blue')
    }

    @HostListener('mouseleave') onLeave(){
        this.renderer.setStyle( this.elRef.nativeElement, 'color', null)
    }
}