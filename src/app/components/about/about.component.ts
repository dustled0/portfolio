import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RESUME_DATA } from '../../data/resume-data';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';
import { GithubStatsComponent } from '../github-stats/github-stats.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, ScrollRevealDirective, GithubStatsComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  profile = RESUME_DATA.profile;
  personalInfo = RESUME_DATA.personalInfo;
  githubUsername = 'dustled0';
}
