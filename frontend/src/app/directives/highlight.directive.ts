import { Directive, ElementRef, HostListener, Input  } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  highlightColor: string;
  constructor( private el: ElementRef){
    this.el.nativeElement.style.backgroundColor = null;
  }

  @HostListener('mouseenter') onMouseEnter() {
    var color = "red";
    if (parseInt(this.medicion) <= 10 ) {
      color = "green"
    } else if (parseInt(this.medicion) <=30) {
      color = "yellow"
    }
    this.highlight(color);
  }
  
  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(null);
  }
  
  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }  

  @Input() medicion: string;
}
