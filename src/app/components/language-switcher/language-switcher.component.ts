import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Language {
  code: string;
  label: string;
  flag: string;
}

@Component({
  selector: 'app-language-switcher',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './language-switcher.component.html',
  styleUrl: './language-switcher.component.scss'
})
export class LanguageSwitcherComponent {
  isOpen = false;
  currentLanguage: Language;

  languages: Language[] = [
    { code: 'en', label: 'English', flag: '🇺🇸' },
    { code: 'tl', label: 'Tagalog', flag: '🇵🇭' }
  ];

  constructor() {
    // Default to English or get from localStorage
    const savedLang = typeof localStorage !== 'undefined'
      ? localStorage.getItem('preferredLanguage')
      : null;
    this.currentLanguage = this.languages.find(l => l.code === savedLang) || this.languages[0];
  }

  toggleDropdown() {
    this.isOpen = !this.isOpen;
  }

  closeDropdown() {
    this.isOpen = false;
  }

  selectLanguage(lang: Language) {
    this.currentLanguage = lang;
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem('preferredLanguage', lang.code);
    }
    this.closeDropdown();

    // In a full i18n implementation, this would navigate to the localized version
    // For now, we'll just store the preference
    // window.location.href = `/${lang.code}/`;
  }
}
