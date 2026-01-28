import { Directive, ElementRef, Input, OnInit, OnDestroy, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Directive({
  selector: '[appCounterAnimate]',
  standalone: true
})
export class CounterAnimateDirective implements OnInit, OnDestroy {
  @Input('appCounterAnimate') targetValue = 0;
  @Input() duration = 2000;
  @Input() delay = 0;

  private observer: IntersectionObserver | null = null;
  private hasAnimated = false;

  constructor(
    private el: ElementRef,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.setupObserver();
    }
  }

  ngOnDestroy() {
    if (this.observer) {
      this.observer.disconnect();
    }
  }

  private setupObserver() {
    const options: IntersectionObserverInit = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5
    };

    this.observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !this.hasAnimated) {
          this.hasAnimated = true;
          setTimeout(() => this.animateCounter(), this.delay);
        }
      });
    }, options);

    this.observer.observe(this.el.nativeElement);
  }

  private animateCounter() {
    const element = this.el.nativeElement;
    const startValue = 0;
    const endValue = this.targetValue;
    const startTime = performance.now();

    const updateCounter = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / this.duration, 1);

      // Easing function (ease-out)
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const currentValue = Math.floor(startValue + (endValue - startValue) * easeOut);

      element.textContent = currentValue.toString();

      if (progress < 1) {
        requestAnimationFrame(updateCounter);
      } else {
        element.textContent = endValue.toString();
      }
    };

    requestAnimationFrame(updateCounter);
  }
}
