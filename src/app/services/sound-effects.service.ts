import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class SoundEffectsService {
  private enabled = false;
  private isBrowser: boolean;
  private audioContext: AudioContext | null = null;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.isBrowser = isPlatformBrowser(this.platformId);
    if (this.isBrowser) {
      // Check if user has enabled sounds
      this.enabled = localStorage.getItem('soundEffects') === 'true';
    }
  }

  toggle(): boolean {
    this.enabled = !this.enabled;
    if (this.isBrowser) {
      localStorage.setItem('soundEffects', String(this.enabled));
    }
    return this.enabled;
  }

  isEnabled(): boolean {
    return this.enabled;
  }

  private getAudioContext(): AudioContext | null {
    if (!this.isBrowser) return null;
    if (!this.audioContext) {
      this.audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
    }
    return this.audioContext;
  }

  // Soft click sound
  playClick(): void {
    if (!this.enabled || !this.isBrowser) return;
    this.playTone(800, 0.05, 'sine');
  }

  // Hover sound
  playHover(): void {
    if (!this.enabled || !this.isBrowser) return;
    this.playTone(600, 0.03, 'sine');
  }

  // Success sound
  playSuccess(): void {
    if (!this.enabled || !this.isBrowser) return;
    this.playTone(523, 0.1, 'sine');
    setTimeout(() => this.playTone(659, 0.1, 'sine'), 100);
    setTimeout(() => this.playTone(784, 0.15, 'sine'), 200);
  }

  // Error sound
  playError(): void {
    if (!this.enabled || !this.isBrowser) return;
    this.playTone(200, 0.15, 'sawtooth');
  }

  private playTone(frequency: number, duration: number, type: OscillatorType): void {
    const ctx = this.getAudioContext();
    if (!ctx) return;

    try {
      const oscillator = ctx.createOscillator();
      const gainNode = ctx.createGain();

      oscillator.type = type;
      oscillator.frequency.setValueAtTime(frequency, ctx.currentTime);
      
      gainNode.gain.setValueAtTime(0.1, ctx.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + duration);

      oscillator.connect(gainNode);
      gainNode.connect(ctx.destination);

      oscillator.start(ctx.currentTime);
      oscillator.stop(ctx.currentTime + duration);
    } catch (e) {
      // Audio context might not be available
    }
  }
}
