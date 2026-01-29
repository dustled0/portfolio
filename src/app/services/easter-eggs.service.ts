import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class EasterEggsService {
  private konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
  private currentPosition = 0;
  private activated = false;
  private isBrowser: boolean;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.isBrowser = isPlatformBrowser(this.platformId);
    if (this.isBrowser) {
      this.init();
    }
  }

  private init(): void {
    document.addEventListener('keydown', (e) => this.handleKeyDown(e));
  }

  private handleKeyDown(e: KeyboardEvent): void {
    const key = e.key;
    
    if (key === this.konamiCode[this.currentPosition]) {
      this.currentPosition++;
      
      if (this.currentPosition === this.konamiCode.length) {
        this.activateEasterEgg();
        this.currentPosition = 0;
      }
    } else {
      this.currentPosition = 0;
    }
  }

  private activateEasterEgg(): void {
    if (this.activated) return;
    this.activated = true;

    // Create confetti effect
    this.createConfetti();

    // Show message
    this.showMessage();

    // Reset after animation
    setTimeout(() => {
      this.activated = false;
    }, 5000);
  }

  private createConfetti(): void {
    const colors = ['#5D4037', '#795548', '#8D6E63', '#FFD700', '#FF6B6B', '#4ECDC4'];
    const confettiCount = 100;

    for (let i = 0; i < confettiCount; i++) {
      const confetti = document.createElement('div');
      confetti.className = 'confetti';
      confetti.style.cssText = `
        position: fixed;
        width: 10px;
        height: 10px;
        background: ${colors[Math.floor(Math.random() * colors.length)]};
        left: ${Math.random() * 100}vw;
        top: -10px;
        opacity: ${Math.random() + 0.5};
        transform: rotate(${Math.random() * 360}deg);
        z-index: 10000;
        pointer-events: none;
        animation: confetti-fall ${2 + Math.random() * 3}s linear forwards;
      `;
      document.body.appendChild(confetti);

      setTimeout(() => confetti.remove(), 5000);
    }

    // Add confetti animation styles
    if (!document.getElementById('confetti-styles')) {
      const style = document.createElement('style');
      style.id = 'confetti-styles';
      style.textContent = `
        @keyframes confetti-fall {
          to {
            transform: translateY(100vh) rotate(720deg);
            opacity: 0;
          }
        }
      `;
      document.head.appendChild(style);
    }
  }

  private showMessage(): void {
    const message = document.createElement('div');
    message.className = 'easter-egg-message';
    message.innerHTML = `
      <div style="
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: linear-gradient(135deg, #5D4037, #8D6E63);
        color: white;
        padding: 2rem 3rem;
        border-radius: 16px;
        font-size: 1.5rem;
        font-weight: bold;
        z-index: 10001;
        text-align: center;
        box-shadow: 0 20px 60px rgba(0,0,0,0.3);
        animation: pop-in 0.5s ease;
      ">
        🎮 You found the secret! 🎉<br>
        <span style="font-size: 1rem; opacity: 0.9;">Thanks for exploring!</span>
      </div>
    `;

    // Add pop-in animation
    if (!document.getElementById('pop-in-styles')) {
      const style = document.createElement('style');
      style.id = 'pop-in-styles';
      style.textContent = `
        @keyframes pop-in {
          0% { transform: translate(-50%, -50%) scale(0); opacity: 0; }
          50% { transform: translate(-50%, -50%) scale(1.1); }
          100% { transform: translate(-50%, -50%) scale(1); opacity: 1; }
        }
      `;
      document.head.appendChild(style);
    }

    document.body.appendChild(message);
    setTimeout(() => message.remove(), 3000);
  }
}
