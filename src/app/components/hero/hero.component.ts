import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RESUME_DATA } from '../../data/resume-data';
import { TypingDirective } from '../../directives/typing.directive';
import { ParallaxDirective } from '../../directives/parallax.directive';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, TypingDirective, ParallaxDirective],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {
  personalInfo = RESUME_DATA.personalInfo;

  typingTexts = [
    'Advanced App Engineering Specialist',
    'Full-Stack Developer',
    'Angular Expert',
    'React Developer'
  ];

  scrollTo(target: string) {
    const element = document.getElementById(target);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
