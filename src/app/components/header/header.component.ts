import { Component, HostListener, OnInit, OnDestroy, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { ThemeService } from '../../services/theme.service';
import { LanguageSwitcherComponent } from '../language-switcher/language-switcher.component';
import { RESUME_DATA } from '../../data/resume-data';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, LanguageSwitcherComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit, OnDestroy {
  isScrolled = false;
  isMobileMenuOpen = false;
  activeSection = 'hero';
  private observer: IntersectionObserver | null = null;
  
  socialLinks = RESUME_DATA.personalInfo.socialLinks;

  navLinks = [
    { label: 'About', target: 'about' },
    { label: 'Skills', target: 'skills' },
    { label: 'Experience', target: 'experience' },
    { label: 'Projects', target: 'projects' },
    { label: 'Education', target: 'education' },
    { label: 'Contact', target: 'contact' }
  ];

  constructor(
    public themeService: ThemeService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.setupIntersectionObserver();
    }
  }

  ngOnDestroy() {
    if (this.observer) {
      this.observer.disconnect();
    }
  }

  private setupIntersectionObserver() {
    const options: IntersectionObserverInit = {
      root: null,
      rootMargin: '-70px 0px -50% 0px',
      threshold: 0
    };

    this.observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          this.activeSection = entry.target.id;
        }
      });
    }, options);

    // Observe all sections
    const sections = ['hero', ...this.navLinks.map(link => link.target)];
    sections.forEach((sectionId) => {
      const element = document.getElementById(sectionId);
      if (element && this.observer) {
        this.observer.observe(element);
      }
    });
  }

  @HostListener('window:scroll')
  onWindowScroll() {
    this.isScrolled = window.scrollY > 50;
  }

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  closeMobileMenu() {
    this.isMobileMenuOpen = false;
  }

  scrollTo(target: string) {
    const element = document.getElementById(target);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      this.closeMobileMenu();
    }
  }

  toggleTheme() {
    this.themeService.toggleTheme();
  }
}
