import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

export type PlaygroundType = 'codepen' | 'stackblitz' | 'codesandbox';

@Component({
  selector: 'app-code-playground',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './code-playground.component.html',
  styleUrl: './code-playground.component.scss'
})
export class CodePlaygroundComponent {
  @Input() type: PlaygroundType = 'codepen';
  @Input() embedId: string = '';
  @Input() title: string = 'Code Demo';
  @Input() height: string = '400px';
  @Input() theme: 'light' | 'dark' = 'dark';
  @Input() defaultTab: string = 'result'; // html,css,js,result

  isLoaded = false;
  showEmbed = false;

  constructor(private sanitizer: DomSanitizer) {}

  get embedUrl(): SafeResourceUrl {
    let url = '';
    
    switch (this.type) {
      case 'codepen':
        // Format: username/pen/penId or just penId
        const penPath = this.embedId.includes('/') ? this.embedId : `pen/${this.embedId}`;
        url = `https://codepen.io/${penPath}/embed/${this.defaultTab}?default-tab=${this.defaultTab}&theme-id=${this.theme}`;
        break;
      case 'stackblitz':
        url = `https://stackblitz.com/edit/${this.embedId}?embed=1&file=src/app/app.component.ts&theme=${this.theme}`;
        break;
      case 'codesandbox':
        url = `https://codesandbox.io/embed/${this.embedId}?fontsize=14&theme=${this.theme}&view=preview`;
        break;
    }
    
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  get iconClass(): string {
    switch (this.type) {
      case 'codepen': return 'fab fa-codepen';
      case 'stackblitz': return 'fas fa-bolt';
      case 'codesandbox': return 'fas fa-cube';
      default: return 'fas fa-code';
    }
  }

  loadEmbed(): void {
    this.showEmbed = true;
  }

  onIframeLoad(): void {
    this.isLoaded = true;
  }
}
