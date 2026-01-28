import { Directive, ElementRef, OnInit, OnDestroy, NgZone, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appCustomCursor]',
  standalone: true
})
export class CustomCursorDirective implements OnInit, OnDestroy {
  private cursor: HTMLElement | null = null;
  private cursorDot: HTMLElement | null = null;
  private mouseX = 0;
  private mouseY = 0;
  private cursorX = 0;
  private cursorY = 0;
  private rafId: number | null = null;
  private isTouchDevice = false;

  private mouseMoveListener: (() => void) | null = null;
  private mouseEnterListener: (() => void) | null = null;
  private mouseLeaveListener: (() => void) | null = null;

  constructor(
    private el: ElementRef,
    private ngZone: NgZone,
    private renderer: Renderer2
  ) {}

  ngOnInit(): void {
    // Check if it's a touch device
    this.isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

    if (this.isTouchDevice) {
      return; // Don't show custom cursor on touch devices
    }

    this.createCursor();
    this.ngZone.runOutsideAngular(() => {
      this.addEventListeners();
      this.animate();
    });
  }

  ngOnDestroy(): void {
    if (this.rafId) {
      cancelAnimationFrame(this.rafId);
    }
    this.removeEventListeners();
    this.removeCursor();
  }

  private createCursor(): void {
    // Create outer cursor (ring)
    this.cursor = this.renderer.createElement('div');
    this.renderer.addClass(this.cursor, 'custom-cursor');
    this.renderer.appendChild(document.body, this.cursor);

    // Create inner cursor (dot)
    this.cursorDot = this.renderer.createElement('div');
    this.renderer.addClass(this.cursorDot, 'custom-cursor-dot');
    this.renderer.appendChild(document.body, this.cursorDot);
  }

  private removeCursor(): void {
    if (this.cursor && this.cursor.parentNode) {
      this.cursor.parentNode.removeChild(this.cursor);
    }
    if (this.cursorDot && this.cursorDot.parentNode) {
      this.cursorDot.parentNode.removeChild(this.cursorDot);
    }
  }

  private addEventListeners(): void {
    this.mouseMoveListener = this.renderer.listen(document, 'mousemove', (e: MouseEvent) => {
      this.mouseX = e.clientX;
      this.mouseY = e.clientY;

      // Update dot position immediately
      if (this.cursorDot) {
        this.cursorDot.style.left = `${this.mouseX}px`;
        this.cursorDot.style.top = `${this.mouseY}px`;
      }
    });

    // Add hover effect for interactive elements
    const interactiveElements = document.querySelectorAll('a, button, input, textarea, select, .btn, .card, .tag, [role="button"]');

    interactiveElements.forEach((el) => {
      el.addEventListener('mouseenter', () => {
        if (this.cursor) {
          this.cursor.classList.add('custom-cursor--hover');
        }
        if (this.cursorDot) {
          this.cursorDot.classList.add('custom-cursor-dot--hover');
        }
      });

      el.addEventListener('mouseleave', () => {
        if (this.cursor) {
          this.cursor.classList.remove('custom-cursor--hover');
        }
        if (this.cursorDot) {
          this.cursorDot.classList.remove('custom-cursor-dot--hover');
        }
      });
    });

    // Hide cursor when leaving window
    this.mouseLeaveListener = this.renderer.listen(document, 'mouseleave', () => {
      if (this.cursor) {
        this.cursor.style.opacity = '0';
      }
      if (this.cursorDot) {
        this.cursorDot.style.opacity = '0';
      }
    });

    this.mouseEnterListener = this.renderer.listen(document, 'mouseenter', () => {
      if (this.cursor) {
        this.cursor.style.opacity = '1';
      }
      if (this.cursorDot) {
        this.cursorDot.style.opacity = '1';
      }
    });
  }

  private removeEventListeners(): void {
    if (this.mouseMoveListener) {
      this.mouseMoveListener();
    }
    if (this.mouseEnterListener) {
      this.mouseEnterListener();
    }
    if (this.mouseLeaveListener) {
      this.mouseLeaveListener();
    }
  }

  private animate(): void {
    // Smooth follow effect for outer cursor
    const ease = 0.15;
    this.cursorX += (this.mouseX - this.cursorX) * ease;
    this.cursorY += (this.mouseY - this.cursorY) * ease;

    if (this.cursor) {
      this.cursor.style.left = `${this.cursorX}px`;
      this.cursor.style.top = `${this.cursorY}px`;
    }

    this.rafId = requestAnimationFrame(() => this.animate());
  }
}
