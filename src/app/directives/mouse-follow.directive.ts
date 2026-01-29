import { Directive, ElementRef, OnInit, OnDestroy, Input, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Directive({
  selector: '[appMouseFollow]',
  standalone: true
})
export class MouseFollowDirective implements OnInit, OnDestroy {
  @Input() intensity: number = 20;
  @Input() perspective: number = 1000;

  private element: HTMLElement;
  private isBrowser: boolean;
  private boundMouseMove: (e: MouseEvent) => void;
  private boundMouseLeave: () => void;

  constructor(
    private el: ElementRef,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    this.element = el.nativeElement;
    this.isBrowser = isPlatformBrowser(this.platformId);
    this.boundMouseMove = this.onMouseMove.bind(this);
    this.boundMouseLeave = this.onMouseLeave.bind(this);
  }

  ngOnInit(): void {
    if (!this.isBrowser) return;

    this.element.style.transition = 'transform 0.1s ease';
    this.element.style.transformStyle = 'preserve-3d';
    
    this.element.addEventListener('mousemove', this.boundMouseMove);
    this.element.addEventListener('mouseleave', this.boundMouseLeave);
  }

  ngOnDestroy(): void {
    if (!this.isBrowser) return;
    
    this.element.removeEventListener('mousemove', this.boundMouseMove);
    this.element.removeEventListener('mouseleave', this.boundMouseLeave);
  }

  private onMouseMove(e: MouseEvent): void {
    const rect = this.element.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = ((y - centerY) / centerY) * -this.intensity;
    const rotateY = ((x - centerX) / centerX) * this.intensity;
    
    this.element.style.transform = `perspective(${this.perspective}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  }

  private onMouseLeave(): void {
    this.element.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
  }
}
