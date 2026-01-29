import { Component, OnInit, ElementRef, ViewChild, AfterViewInit, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RESUME_DATA, Skill } from '../../data/resume-data';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';

interface TechNode {
  skill: Skill;
  x: number;
  y: number;
  size: number;
  color: string;
}

@Component({
  selector: 'app-tech-stack',
  standalone: true,
  imports: [CommonModule, ScrollRevealDirective],
  templateUrl: './tech-stack.component.html',
  styleUrl: './tech-stack.component.scss'
})
export class TechStackComponent implements OnInit, AfterViewInit {
  skills = RESUME_DATA.skills;
  techNodes: TechNode[] = [];
  selectedCategory: string = 'all';
  categories = ['all', 'frontend', 'backend', 'tools', 'other'];
  isBrowser = false;

  private colors: Record<string, string> = {
    frontend: '#61DAFB',
    backend: '#68A063',
    tools: '#F7DF1E',
    other: '#8D6E63'
  };

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  ngOnInit(): void {
    this.generateNodes();
  }

  ngAfterViewInit(): void {
    if (this.isBrowser) {
      this.generateNodes();
    }
  }

  generateNodes(): void {
    const filteredSkills = this.selectedCategory === 'all' 
      ? this.skills 
      : this.skills.filter(s => s.category === this.selectedCategory);

    this.techNodes = filteredSkills.map((skill, index) => {
      const angle = (index / filteredSkills.length) * 2 * Math.PI;
      const radius = 120 + (100 - skill.level) * 1.5;
      
      return {
        skill,
        x: 200 + radius * Math.cos(angle),
        y: 200 + radius * Math.sin(angle),
        size: 30 + skill.level / 3,
        color: this.colors[skill.category] || '#8D6E63'
      };
    });
  }

  filterByCategory(category: string): void {
    this.selectedCategory = category;
    this.generateNodes();
  }

  get filteredSkills(): Skill[] {
    if (this.selectedCategory === 'all') return this.skills;
    return this.skills.filter(s => s.category === this.selectedCategory);
  }
}
