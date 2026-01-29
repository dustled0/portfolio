import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-github-stats',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './github-stats.component.html',
  styleUrl: './github-stats.component.scss'
})
export class GithubStatsComponent implements OnInit {
  @Input() username: string = 'dustled0';
  @Input() theme: 'light' | 'dark' = 'light';

  statsUrl: SafeResourceUrl = '';
  streakUrl: SafeResourceUrl = '';
  topLangsUrl: SafeResourceUrl = '';
  
  isLoaded = {
    stats: false,
    streak: false,
    langs: false
  };

  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit(): void {
    const themeParam = this.theme === 'dark' ? 'tokyonight' : 'default';
    
    // GitHub Readme Stats
    this.statsUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
      `https://github-readme-stats.vercel.app/api?username=${this.username}&show_icons=true&theme=${themeParam}&hide_border=true&bg_color=00000000`
    );
    
    // GitHub Streak Stats
    this.streakUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
      `https://github-readme-streak-stats.herokuapp.com/?user=${this.username}&theme=${themeParam}&hide_border=true&background=00000000`
    );
    
    // Top Languages
    this.topLangsUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
      `https://github-readme-stats.vercel.app/api/top-langs/?username=${this.username}&layout=compact&theme=${themeParam}&hide_border=true&bg_color=00000000`
    );
  }

  onImageLoad(type: 'stats' | 'streak' | 'langs'): void {
    this.isLoaded[type] = true;
  }
}
