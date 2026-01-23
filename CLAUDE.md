# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Angular 17 portfolio/resume website for Dustine Lee A. Dequito. Single-page application using standalone components with SCSS styling and Font Awesome icons.

## Commands

```bash
npm start           # Dev server at http://localhost:4200
npm run build       # Production build to dist/dustine-portfolio
npm test            # Unit tests via Karma
ng generate component components/name  # New component (use components/ folder)
```

## Architecture

**Data-Driven Design**: All resume content is centralized in `src/app/data/resume-data.ts`. The `RESUME_DATA` constant contains personal info, skills, experience, projects, and education. Components consume this data via TypeScript interfaces (`Skill`, `Experience`, `Project`, `Education`, `ResumeData`).

**Component Structure**: App uses standalone components (no NgModule). All section components live in `src/app/components/`:
- `header` - Navigation
- `hero` - Landing section
- `about` - Profile summary
- `skills` - Technical skills display
- `experience` - Work history
- `projects` - Project portfolio
- `education` - Academic background
- `contact` - Contact information

**Styling**: SCSS with Font Awesome icons loaded globally via `angular.json`.

## Deployment

GitHub Pages via GitHub Actions (`.github/workflows/deploy.yml`). Pushes to `main` trigger automatic deployment with `--base-href /portfolio/`.
