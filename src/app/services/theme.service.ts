import { Injectable, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private readonly THEME_KEY = 'portfolio-theme';
  private darkMode = new BehaviorSubject<boolean>(false);
  darkMode$ = this.darkMode.asObservable();

  private isBrowser: boolean;

  constructor(@Inject(PLATFORM_ID) platformId: Object) {
    this.isBrowser = isPlatformBrowser(platformId);
    this.initializeTheme();
  }

  private initializeTheme(): void {
    if (!this.isBrowser) return;

    const savedTheme = localStorage.getItem(this.THEME_KEY);
    if (savedTheme) {
      this.setDarkMode(savedTheme === 'dark');
    } else {
      // Check system preference
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      this.setDarkMode(prefersDark);
    }
  }

  toggleTheme(): void {
    this.setDarkMode(!this.darkMode.value);
  }

  setDarkMode(isDark: boolean): void {
    this.darkMode.next(isDark);
    if (this.isBrowser) {
      localStorage.setItem(this.THEME_KEY, isDark ? 'dark' : 'light');
      document.documentElement.classList.toggle('dark-theme', isDark);
    }
  }

  isDarkMode(): boolean {
    return this.darkMode.value;
  }
}
