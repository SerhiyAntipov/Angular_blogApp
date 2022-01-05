import {Directive, ElementRef, Renderer2} from "@angular/core";
import {colors} from "@angular/cli/utilities/color";
import {style} from "@angular/animations";

@Directive({
    selector: '[appStyle]'
})
export class StyleDirective {

    constructor(private elRef: ElementRef, private renderer: Renderer2) {
        // console.log(elRef)
        // this.elRef.nativeElement.style.color = 'red'
        this.renderer.setStyle(this.elRef.nativeElement, 'color', 'blue')
    }

}