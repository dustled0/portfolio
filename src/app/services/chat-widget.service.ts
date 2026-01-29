import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { RESUME_DATA, ChatWidgetConfig } from '../data/resume-data';

@Injectable({
  providedIn: 'root'
})
export class ChatWidgetService {
  private initialized = false;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  init(): void {
    if (!isPlatformBrowser(this.platformId) || this.initialized) {
      return;
    }

    const config = RESUME_DATA.personalInfo.chatWidget;
    if (!config?.enabled) {
      return;
    }

    this.initialized = true;

    switch (config.provider) {
      case 'crisp':
        this.initCrisp(config.siteId);
        break;
      case 'tawkto':
        this.initTawkTo(config.siteId, config.widgetId || 'default');
        break;
    }
  }

  private initCrisp(websiteId: string): void {
    (window as any).$crisp = [];
    (window as any).CRISP_WEBSITE_ID = websiteId;

    const script = document.createElement('script');
    script.src = 'https://client.crisp.chat/l.js';
    script.async = true;
    document.head.appendChild(script);
  }

  private initTawkTo(propertyId: string, widgetId: string): void {
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://embed.tawk.to/${propertyId}/${widgetId}`;
    script.charset = 'UTF-8';
    script.setAttribute('crossorigin', '*');
    document.head.appendChild(script);
  }

  // Optional: Show/hide chat widget programmatically
  showChat(): void {
    const config = RESUME_DATA.personalInfo.chatWidget;
    if (!config?.enabled) return;

    if (config.provider === 'crisp' && (window as any).$crisp) {
      (window as any).$crisp.push(['do', 'chat:show']);
      (window as any).$crisp.push(['do', 'chat:open']);
    } else if (config.provider === 'tawkto' && (window as any).Tawk_API) {
      (window as any).Tawk_API.showWidget();
      (window as any).Tawk_API.maximize();
    }
  }

  hideChat(): void {
    const config = RESUME_DATA.personalInfo.chatWidget;
    if (!config?.enabled) return;

    if (config.provider === 'crisp' && (window as any).$crisp) {
      (window as any).$crisp.push(['do', 'chat:hide']);
    } else if (config.provider === 'tawkto' && (window as any).Tawk_API) {
      (window as any).Tawk_API.hideWidget();
    }
  }
}
