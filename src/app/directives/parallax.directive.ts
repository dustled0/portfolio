import { Directive, ElementRef, Input, OnInit, OnDestroy, PLATFORM_ID, Inject, NgZone } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Directive({
  selector: '[appParallax]',
  standalone: true
})
export class ParallaxDirective implements OnInit, OnDestroy {
  @Input() parallaxSpeed: number = 0.5;

  private isBrowser: boolean;
  private rafId: number | null = null;

  constructor(
    private el: ElementRef,
    private ngZone: NgZone,
    @Inject(PLATFORM_ID) platformId: Object
  ) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  ngOnInit(): void {
    if (!this.isBrowser) return;

    this.ngZone.runOutsideAngular(() => {
      window.addEventListener('scroll', this.onScroll.bind(this), { passive: true });
    });
  }

  ngOnDestroy(): void {
    if (this.isBrowser) {
      window.removeEventListener('scroll', this.onScroll.bind(this));
      if (this.rafId) {
        cancelAnimationFrame(this.rafId);
      }
    }
  }

  private onScroll(): void {
    if (this.rafId) {
      cancelAnimationFrame(this.rafId);
    }

    this.rafId = requestAnimationFrame(() => {
      const scrolled = window.scrollY;
      const element = this.el.nativeElement;
      const rect = element.getBoundingClientRect();

      // Only apply parallax if element is in viewport
      if (rect.bottom > 0) {
        const offset = scrolled * this.parallaxSpeed;
        element.style.transform = `translateY(${offset}px)`;
      }
    });
  }
}
