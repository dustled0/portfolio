# Portfolio Improvements Roadmap

This document outlines potential improvements for the portfolio website, organized by category.

---

## Visual/UX Enhancements

- [x] **Dark mode toggle with theme persistence** - Toggle button in header, saves preference to localStorage
- [x] **Typing animation for hero section text** - Typewriter effect cycling through job titles
- [x] **Skill bar fill animation** - Bars animate from 0% to target width on scroll
- [x] **Parallax scrolling effect on hero background** - Background moves slower than scroll
- [x] **Hover micro-interactions on cards/buttons** - Lift, scale, glow, and ripple effects
- [x] **Back-to-top floating button** - Appears after scrolling down, smooth scroll to top
- [x] **Loading skeleton/spinner on initial load** - Shows while Angular bootstraps

---

## Functionality

- [x] **Project filtering by technology/category** - Filter projects by tech stack tags
- [x] **Working contact form** - Integrate with Formspree, Netlify Forms, or custom backend
- [x] **Downloadable PDF resume button** - Generate or link to PDF version of resume
- [ ] **Language switcher (i18n)** - Support multiple languages
- [x] **Search functionality** - Search through projects and skills

---

## Navigation

- [ ] **Active nav link highlighting based on scroll position** - Highlight current section in nav
- [ ] **Mobile hamburger menu animation** - Animated hamburger to X transition
- [ ] **Smooth scroll offset adjustment for fixed header** - Account for header height when scrolling to sections

---

## Performance

- [ ] **Lazy loading for images** - Load images only when they enter viewport
- [ ] **Image optimization (WebP format)** - Convert images to modern formats
- [ ] **Service worker for offline support (PWA)** - Make the site work offline
- [ ] **Preload critical assets** - Preload fonts and critical CSS

---

## SEO/Accessibility

- [ ] **Open Graph meta tags for social sharing** - Rich previews when shared on social media
- [ ] **Structured data (JSON-LD) for resume** - Help search engines understand resume content
- [ ] **Skip-to-content link** - Accessibility feature for keyboard navigation
- [ ] **ARIA labels and keyboard navigation improvements** - Better screen reader support
- [ ] **Print-friendly stylesheet** - Optimized styles for printing resume

---

## Content Additions

- [ ] **Testimonials/recommendations section** - Display quotes from colleagues or clients
- [ ] **Blog/articles section** - Share technical articles and insights
- [ ] **Certifications section** - Display professional certifications
- [ ] **Animated statistics/counters** - Count-up animation for numbers (years, projects, etc.)

---

## Scroll Animations (Completed)

- [x] **Scroll-reveal directive** - Reusable directive using Intersection Observer API
- [x] **Multiple animation types** - fade-up, fade-left, fade-right, scale-up
- [x] **Staggered animations** - Sequential reveal for lists and cards
- [x] **Configurable threshold and delay** - Customizable animation triggers

---

## Implementation Notes

### Completed Features
All Visual/UX enhancements and Scroll Animations have been implemented. See commit `fe50cc5` for details.

Functionality features completed:
- Project filtering with technology chips and search bar
- Contact form with Formspree integration (requires user to add their Formspree endpoint)
- PDF resume download button in header (requires user to add resume.pdf to src/assets/)
- Search functionality for both projects and skills sections

### Priority Suggestions
1. **High Priority**: SEO/Accessibility improvements (Open Graph, ARIA labels)
2. **Medium Priority**: Navigation enhancements (active link highlighting)
3. **Medium Priority**: Performance optimizations (lazy loading, PWA)
4. **Low Priority**: Content additions (blog, testimonials)
5. **Low Priority**: Language switcher (i18n)

### Technical Considerations
- PWA implementation requires `@angular/pwa` package
- i18n requires `@angular/localize` and translation files
- Contact form uses Formspree - update endpoint in `contact.component.ts` with your form ID
- PDF resume requires placing `resume.pdf` file in `src/assets/` directory
