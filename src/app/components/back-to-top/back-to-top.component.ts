import { Component, HostListener, PLATFORM_ID, Inject } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-back-to-top',
  standalone: true,
  imports: [CommonModule],
  template: `
    <button
      class="back-to-top"
      [class.back-to-top--visible]="isVisible"
      (click)="scrollToTop()"
      aria-label="Back to top">
      <i class="fas fa-chevron-up"></i>
    </button>
  `,
  styles: [`
    .back-to-top {
      position: fixed;
      bottom: 2rem;
      right: 2rem;
      width: 50px;
      height: 50px;
      border-radius: 50%;
      background-color: var(--primary-brown, #5D4037);
      color: white;
      border: none;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.25rem;
      opacity: 0;
      visibility: hidden;
      transform: translateY(20px);
      transition: all 0.3s ease;
      box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
      z-index: 999;

      &:hover {
        background-color: var(--primary-brown-light, #795548);
        transform: translateY(-3px);
        box-shadow: 0 6px 20px rgba(0, 0, 0, 0.25);
      }

      &:active {
        transform: translateY(0);
      }

      &--visible {
        opacity: 1;
        visibility: visible;
        transform: translateY(0);
      }
    }

    :host-context(.dark-theme) .back-to-top {
      background-color: var(--accent-orange, #8D6E63);

      &:hover {
        background-color: var(--primary-brown-light, #795548);
      }
    }
  `]
})
export class BackToTopComponent {
  isVisible = false;
  private isBrowser: boolean;

  constructor(@Inject(PLATFORM_ID) platformId: Object) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  @HostListener('window:scroll')
  onWindowScroll(): void {
    if (this.isBrowser) {
      this.isVisible = window.scrollY > 300;
    }
  }

  scrollToTop(): void {
    if (this.isBrowser) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }
}
