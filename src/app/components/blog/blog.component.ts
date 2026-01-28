import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RESUME_DATA, BlogPost } from '../../data/resume-data';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [CommonModule, ScrollRevealDirective],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.scss'
})
export class BlogComponent {
  blogPosts: BlogPost[] = RESUME_DATA.blogPosts;
}
