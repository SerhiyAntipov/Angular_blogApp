import {Directive, ElementRef, HostListener, Input, Renderer2} from "@angular/core";
import {colors} from "@angular/cli/utilities/color";
import {style} from "@angular/animations";

@Directive({
    selector: '[appStyle]'
})
export class StyleDirective {
    @Input('appStyle') color: string = ''
    @Input() fontWeight: string = 'normal'
    @Input() dStyles: {border?: '1px solid red', borderRadius?: '5px'}

    constructor(private elRef: ElementRef, private renderer: Renderer2) {
        // console.log(elRef)
        // this.elRef.nativeElement.style.color = 'red'
        // this.renderer.setStyle(this.elRef.nativeElement, 'color', 'blue')
    }
    @HostListener('click', ['$event']) onClick(event){
        console.log(event)
    }

    @HostListener('mouseenter') onEnter(){
        this.renderer.setStyle( this.elRef.nativeElement, 'color', this.color)
        this.renderer.setStyle( this.elRef.nativeElement, 'border', this.dStyles.border)
        this.renderer.setStyle( this.elRef.nativeElement, 'borderRadius', this.dStyles.borderRadius)
    }

    @HostListener('mouseleave') onLeave(){
        this.renderer.setStyle( this.elRef.nativeElement, 'color', null)
        this.renderer.setStyle( this.elRef.nativeElement, 'border', null)
        this.renderer.setStyle( this.elRef.nativeElement, 'borderRadius', null)
    }
}