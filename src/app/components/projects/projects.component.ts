import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RESUME_DATA, Project } from '../../data/resume-data';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, FormsModule, ScrollRevealDirective],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  projects = RESUME_DATA.projects;
  activeFilter = 'All';
  searchQuery = '';

  get allTechnologies(): string[] {
    const techSet = new Set<string>();
    this.projects.forEach(project => {
      project.technologies.forEach(tech => techSet.add(tech));
    });
    return ['All', ...Array.from(techSet).sort()];
  }

  get filteredProjects(): Project[] {
    let result = this.projects;

    if (this.activeFilter !== 'All') {
      result = result.filter(project =>
        project.technologies.includes(this.activeFilter)
      );
    }

    if (this.searchQuery.trim()) {
      const query = this.searchQuery.toLowerCase().trim();
      result = result.filter(project =>
        project.name.toLowerCase().includes(query) ||
        project.description.toLowerCase().includes(query) ||
        project.technologies.some(tech => tech.toLowerCase().includes(query))
      );
    }

    return result;
  }

  setFilter(tech: string): void {
    this.activeFilter = tech;
  }
}
