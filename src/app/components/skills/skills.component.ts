import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RESUME_DATA, Skill } from '../../data/resume-data';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';
import { SkillAnimateDirective } from '../../directives/skill-animate.directive';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule, ScrollRevealDirective, SkillAnimateDirective],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {
  skills = RESUME_DATA.skills;

  get frontendSkills(): Skill[] {
    return this.skills.filter(s => s.category === 'frontend');
  }

  get backendSkills(): Skill[] {
    return this.skills.filter(s => s.category === 'backend');
  }

  get toolsSkills(): Skill[] {
    return this.skills.filter(s => s.category === 'tools');
  }

  get otherSkills(): Skill[] {
    return this.skills.filter(s => s.category === 'other');
  }
}
