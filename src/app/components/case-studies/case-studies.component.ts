import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RESUME_DATA, CaseStudy } from '../../data/resume-data';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';

@Component({
  selector: 'app-case-studies',
  standalone: true,
  imports: [CommonModule, ScrollRevealDirective],
  templateUrl: './case-studies.component.html',
  styleUrl: './case-studies.component.scss'
})
export class CaseStudiesComponent {
  caseStudies = RESUME_DATA.caseStudies;
  expandedIndex: number | null = null;

  toggleExpand(index: number): void {
    this.expandedIndex = this.expandedIndex === index ? null : index;
  }

  isExpanded(index: number): boolean {
    return this.expandedIndex === index;
  }
}
