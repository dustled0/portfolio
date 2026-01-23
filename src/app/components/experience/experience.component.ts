import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RESUME_DATA } from '../../data/resume-data';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss'
})
export class ExperienceComponent {
  experiences = RESUME_DATA.experience;
}
