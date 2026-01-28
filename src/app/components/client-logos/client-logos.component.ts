import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RESUME_DATA } from '../../data/resume-data';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';

@Component({
  selector: 'app-client-logos',
  standalone: true,
  imports: [CommonModule, ScrollRevealDirective],
  templateUrl: './client-logos.component.html',
  styleUrl: './client-logos.component.scss'
})
export class ClientLogosComponent {
  clients = RESUME_DATA.clients;
}
