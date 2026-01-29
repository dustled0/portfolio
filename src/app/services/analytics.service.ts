import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class AnalyticsService {
  private readonly STORAGE_KEY = 'portfolio_analytics';

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  private getAnalytics(): { resumeDownloads: number; pageViews: number } {
    if (!isPlatformBrowser(this.platformId)) {
      return { resumeDownloads: 0, pageViews: 0 };
    }
    
    const stored = localStorage.getItem(this.STORAGE_KEY);
    if (stored) {
      return JSON.parse(stored);
    }
    return { resumeDownloads: 47, pageViews: 1250 }; // Starting numbers for social proof
  }

  private saveAnalytics(data: { resumeDownloads: number; pageViews: number }): void {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(data));
    }
  }

  trackResumeDownload(): number {
    const analytics = this.getAnalytics();
    analytics.resumeDownloads++;
    this.saveAnalytics(analytics);
    return analytics.resumeDownloads;
  }

  trackPageView(): number {
    const analytics = this.getAnalytics();
    analytics.pageViews++;
    this.saveAnalytics(analytics);
    return analytics.pageViews;
  }

  getResumeDownloads(): number {
    return this.getAnalytics().resumeDownloads;
  }

  getPageViews(): number {
    return this.getAnalytics().pageViews;
  }
}
