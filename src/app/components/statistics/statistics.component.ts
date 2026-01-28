import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RESUME_DATA, Statistic } from '../../data/resume-data';
import { CounterAnimateDirective } from '../../directives/counter-animate.directive';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';

@Component({
  selector: 'app-statistics',
  standalone: true,
  imports: [CommonModule, CounterAnimateDirective, ScrollRevealDirective],
  templateUrl: './statistics.component.html',
  styleUrl: './statistics.component.scss'
})
export class StatisticsComponent {
  statistics: Statistic[] = RESUME_DATA.statistics;
}
