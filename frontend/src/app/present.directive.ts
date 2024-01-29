import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appPresent]',
})
export class PresentDirective {
  constructor(private el: ElementRef) {
    this.scale('');
    this.opacity('');
  }

  private scale(up: string) {
    this.el.nativeElement.style.scale = up;
  }

  private opacity(pointer: string) {
    this.el.nativeElement.style.opacity = pointer;
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.opacity('1.0');
    this.scale('1.0');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.opacity('0.8');
    this.scale('0.9');
  }
}
