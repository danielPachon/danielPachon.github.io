# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users
Two audiences, weighted equally:
- Technical recruiters hiring a full stack developer for remote roles or roles in Spain. Job: decide in seconds whether Daniel is worth contacting, then message him on LinkedIn or download the CV.
- Tech leads and CTOs evaluating craft. Job: open the projects, the live demos and the repositories, and judge code quality and judgment.

## Product Purpose
Personal portfolio of Daniel Pachón, software engineer from Calarcá, Colombia. It exists to turn a visit into a conversation: a LinkedIn message or a CV download from a recruiter, a repository or live demo opened by a tech lead. Success is a visitor who can say who Daniel is and what he builds after one screen, and who acts.

## Positioning
A software engineer (Java, Python, TypeScript; full stack web, REST APIs) completing a specialization in data analytics, with years of real sales and customer retention work in telecom and finance behind him. The portfolio itself is evidence: it is built and shipped to the same standard as the projects it shows.

## Operating Context
Visitors arrive from LinkedIn, the GitHub profile README, a CV link or a job application, mostly on desktop during working hours, often on mobile from LinkedIn. Recruiters skim; tech leads click through to code.

## Capabilities and Constraints
- Bilingual: English at `/`, Spanish at `/es/`; both must stay complete and in sync. (Confirmed: must keep.)
- Light and dark themes with a visible switch, following the system by default. (Confirmed: must keep.)
- Static site built with Astro, deployed to GitHub Pages from `main` by GitHub Actions.
- Contact through LinkedIn and the CV only; no email shown on the page and no contact form.
- Must stay fast and accessible: reduced motion respected, WCAG AA contrast, keyboard reachable.
- Less text than the previous version: recruiters skim (confirmed complaint: too much text).

## Brand Commitments
- Name shown as "Daniel Pachón".
- The black and white portrait (`src/assets/daniel.jpg`) stays. (Confirmed.)

## Evidence on Hand
- Portrait: `src/assets/daniel.jpg`.
- Featured project: Task Manager, a full stack Kanban app. Live web app https://task-manager-web-cn5q.onrender.com, API docs https://task-manager-api-0uhq.onrender.com/docs, repositories danielPachon/task-manager-web and danielPachon/task-manager-api. Screenshots: `src/assets/task-manager-light.png`, `src/assets/task-manager-dark-es.png`. 45 automated tests, CI on GitHub Actions, Docker, Render Blueprints, Neon PostgreSQL.
- CV (public copy without address or phone): `public/Daniel-Pachon-CV.pdf`.
- Experience and education from the CV in `src/i18n/content.ts`.
- Absent and not to be fabricated: testimonials, client logos, metrics about past employers, years-of-experience totals, other finished projects (the next ones are on a roadmap, not built).

## Product Principles
- One screen must say who he is, what he builds and how to reach him.
- Show the work, not adjectives: real project, real demo, real code.
- Every sentence earns its place; cut copy before adding sections.
- The site is a work sample: its own craft is part of the argument.

## Accessibility & Inclusion
WCAG 2.1 AA, full keyboard use, `prefers-reduced-motion` honored (no intro, no smooth scroll, no scroll-linked effects).
