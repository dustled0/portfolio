import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RESUME_DATA, Certification } from '../../data/resume-data';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';

@Component({
  selector: 'app-certifications',
  standalone: true,
  imports: [CommonModule, ScrollRevealDirective],
  templateUrl: './certifications.component.html',
  styleUrl: './certifications.component.scss'
})
export class CertificationsComponent {
  certifications: Certification[] = RESUME_DATA.certifications;
}
