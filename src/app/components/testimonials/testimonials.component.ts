import { Component, OnInit, OnDestroy, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RESUME_DATA, Testimonial } from '../../data/resume-data';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [CommonModule, ScrollRevealDirective],
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.scss'
})
export class TestimonialsComponent implements OnInit, OnDestroy {
  testimonials: Testimonial[] = RESUME_DATA.testimonials;
  currentIndex = 0;
  private autoplayInterval: ReturnType<typeof setInterval> | null = null;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.startAutoplay();
    }
  }

  ngOnDestroy() {
    this.stopAutoplay();
  }

  get currentTestimonial(): Testimonial {
    return this.testimonials[this.currentIndex];
  }

  nextTestimonial() {
    this.currentIndex = (this.currentIndex + 1) % this.testimonials.length;
    this.restartAutoplay();
  }

  previousTestimonial() {
    this.currentIndex = (this.currentIndex - 1 + this.testimonials.length) % this.testimonials.length;
    this.restartAutoplay();
  }

  goToTestimonial(index: number) {
    this.currentIndex = index;
    this.restartAutoplay();
  }

  private startAutoplay() {
    this.autoplayInterval = setInterval(() => {
      this.nextTestimonial();
    }, 5000);
  }

  private stopAutoplay() {
    if (this.autoplayInterval) {
      clearInterval(this.autoplayInterval);
      this.autoplayInterval = null;
    }
  }

  private restartAutoplay() {
    this.stopAutoplay();
    this.startAutoplay();
  }
}
