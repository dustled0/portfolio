import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RESUME_DATA, Skill } from '../../data/resume-data';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';
import { SkillAnimateDirective } from '../../directives/skill-animate.directive';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule, FormsModule, ScrollRevealDirective, SkillAnimateDirective],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {
  skills = RESUME_DATA.skills;
  searchQuery = '';

  private filterBySearch(skills: Skill[]): Skill[] {
    if (!this.searchQuery.trim()) {
      return skills;
    }
    const query = this.searchQuery.toLowerCase().trim();
    return skills.filter(s => s.name.toLowerCase().includes(query));
  }

  get frontendSkills(): Skill[] {
    return this.filterBySearch(this.skills.filter(s => s.category === 'frontend'));
  }

  get backendSkills(): Skill[] {
    return this.filterBySearch(this.skills.filter(s => s.category === 'backend'));
  }

  get toolsSkills(): Skill[] {
    return this.filterBySearch(this.skills.filter(s => s.category === 'tools'));
  }

  get otherSkills(): Skill[] {
    return this.filterBySearch(this.skills.filter(s => s.category === 'other'));
  }

  get hasResults(): boolean {
    return this.frontendSkills.length > 0 ||
           this.backendSkills.length > 0 ||
           this.toolsSkills.length > 0 ||
           this.otherSkills.length > 0;
  }
}
