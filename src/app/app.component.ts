import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { HeroComponent } from './components/hero/hero.component';
import { AboutComponent } from './components/about/about.component';
import { StatisticsComponent } from './components/statistics/statistics.component';
import { ClientLogosComponent } from './components/client-logos/client-logos.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';
import { CertificationsComponent } from './components/certifications/certifications.component';
import { BlogComponent } from './components/blog/blog.component';
import { EducationComponent } from './components/education/education.component';
import { ContactComponent } from './components/contact/contact.component';
import { BackToTopComponent } from './components/back-to-top/back-to-top.component';
import { CustomCursorDirective } from './directives/custom-cursor.directive';
import { ChatWidgetService } from './services/chat-widget.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeaderComponent,
    HeroComponent,
    AboutComponent,
    StatisticsComponent,
    ClientLogosComponent,
    SkillsComponent,
    ExperienceComponent,
    ProjectsComponent,
    TestimonialsComponent,
    CertificationsComponent,
    BlogComponent,
    EducationComponent,
    ContactComponent,
    BackToTopComponent,
    CustomCursorDirective
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'Dustine Lee A. Dequito - Portfolio';

  constructor(private chatWidgetService: ChatWidgetService) {}

  ngOnInit(): void {
    this.chatWidgetService.init();
  }
}
