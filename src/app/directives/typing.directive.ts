import { Directive, ElementRef, Input, OnInit, OnDestroy, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Directive({
  selector: '[appTyping]',
  standalone: true
})
export class TypingDirective implements OnInit, OnDestroy {
  @Input() appTyping: string[] = [];
  @Input() typingSpeed: number = 100;
  @Input() deletingSpeed: number = 50;
  @Input() pauseDuration: number = 2000;

  private isBrowser: boolean;
  private currentIndex = 0;
  private currentText = '';
  private isDeleting = false;
  private timeoutId: any;

  constructor(
    private el: ElementRef,
    @Inject(PLATFORM_ID) platformId: Object
  ) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  ngOnInit(): void {
    if (!this.isBrowser || this.appTyping.length === 0) return;
    this.type();
  }

  ngOnDestroy(): void {
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
    }
  }

  private type(): void {
    const currentWord = this.appTyping[this.currentIndex];

    if (this.isDeleting) {
      this.currentText = currentWord.substring(0, this.currentText.length - 1);
    } else {
      this.currentText = currentWord.substring(0, this.currentText.length + 1);
    }

    this.el.nativeElement.textContent = this.currentText;

    let delay = this.isDeleting ? this.deletingSpeed : this.typingSpeed;

    if (!this.isDeleting && this.currentText === currentWord) {
      delay = this.pauseDuration;
      this.isDeleting = true;
    } else if (this.isDeleting && this.currentText === '') {
      this.isDeleting = false;
      this.currentIndex = (this.currentIndex + 1) % this.appTyping.length;
      delay = 500;
    }

    this.timeoutId = setTimeout(() => this.type(), delay);
  }
}
