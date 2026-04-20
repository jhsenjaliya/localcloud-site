## Context

LocalCloud is an open-source GCP emulation platform (15 services, single Docker container) with no real website — just a VitePress scaffold with two empty pages. The goal is a premium developer-tool website inspired by Hex.tech, Vercel, and Linear aesthetics: dark-first, technically credible, conversion-optimized. The site is purely static with no backend; it markets and documents the open-source project.

The current stack (VitePress with default theme) provides no custom design, no content, and limited flexibility for the premium visual experience required.

## Goals / Non-Goals

**Goals:**
- Build a visually premium, dark-first marketing + documentation website
- Communicate LocalCloud's value proposition in under 10 seconds (hero → docker run)
- Provide comprehensive documentation for all 15 emulated services, CLI, and configuration
- Achieve Lighthouse scores of 95+ across all categories
- Ship a design system with reusable tokens and components
- Maintain GitHub Pages deployment with fast builds (<30s)
- Mobile-responsive across all breakpoints

**Non-Goals:**
- No interactive playground or live emulator demo (future consideration)
- No user accounts, authentication, or backend APIs
- No blog or changelog system in v1 (can be added later)
- No i18n/localization
- No custom CMS — content lives in markdown/MDX files in the repo
- No real-time data from LocalCloud instances (purely static content)

## Decisions

### 1. Framework: Astro with MDX

**Choice:** Astro 4+ with MDX content collections

**Rationale:** Astro ships zero JavaScript by default (critical for Lighthouse performance), has first-class MDX support for documentation, supports island architecture for interactive components (service grid, code tabs), and builds to static HTML for GitHub Pages. VitePress is Vue-locked and limited in custom design flexibility.

**Alternatives considered:**
- *VitePress (current)*: Limited theming, Vue-only, hard to achieve the premium custom design needed
- *Next.js*: Overkill for a static site, ships more JS, SSR not needed
- *Docusaurus*: React-based docs framework, but opinionated theming makes custom design harder

### 2. Styling: Tailwind CSS v4 + CSS custom properties

**Choice:** Tailwind CSS v4 for utility-first styling, with CSS custom properties for the design token layer

**Rationale:** Tailwind enables rapid UI development with design constraints. CSS custom properties power dark/light theme switching. Tailwind v4 has native CSS variable integration.

**Alternatives considered:**
- *Vanilla CSS*: Too slow for the scope of pages needed
- *CSS Modules*: Good isolation but verbose for a marketing site
- *Styled-components*: Requires React runtime, poor for static sites

### 3. Design Language: Hex.tech-inspired dark-first

**Choice:** Dark-first design with deep slate/purple palette, gradient text treatments, glassmorphism cards, subtle grid/dot textures, and spring-based animations

**Color palette:**
- Background: slate-950 (#0a0a12) → slate-900 (#111827)
- Surface: slate-800/50 with backdrop-blur (glassmorphism)
- Primary accent: indigo-500 (#6366f1) → violet-500 (#8b5cf6) gradient
- Secondary: emerald-400 (#34d399) for success/status indicators
- Text: slate-50 (#f8fafc) primary, slate-400 (#94a3b8) secondary
- Code: amber-300 (#fcd34d) for syntax highlights

**Typography:**
- Headlines: Inter (variable weight, -0.025em tracking) or Geist Sans
- Body: Inter 16px/1.6
- Mono: JetBrains Mono or Geist Mono for code blocks

### 4. Content Architecture

**Choice:** Three-tier structure: Marketing (landing, features, services) → Docs (guides, reference) → Community (GitHub, contributing)

```
/                     Landing page (hero + features + quickstart)
/features             Feature deep-dive
/services             Service catalog (15 services grid)
/services/[slug]      Per-service detail pages
/docs/                Getting started
/docs/cli             CLI reference
/docs/configuration   Configuration guide
/docs/seed-data       Seed data format
/docs/sdk-examples    SDK integration (Python, Node.js, Go, Java)
/docs/architecture    Architecture overview
/docs/faq             FAQ
```

### 5. Deployment: GitHub Pages (unchanged)

**Choice:** Keep GitHub Pages deployment, update the workflow for Astro builds

**Rationale:** Free, already configured, sufficient for a static documentation site. No need for Vercel/Netlify complexity.

## Risks / Trade-offs

- **[Scope]** 15 service documentation pages is substantial content work → Mitigate by templating service pages from a structured data file (services.yaml from the main project)
- **[Framework migration]** Replacing VitePress with Astro is a full rewrite → Acceptable since the current site has zero real content to migrate
- **[Design fidelity]** Matching Hex.tech's polish requires significant CSS craft → Mitigate by establishing the design system tokens first, building components atomically
- **[Font loading]** Custom fonts (Inter, JetBrains Mono) add payload → Mitigate with `font-display: swap`, subset fonts, preload critical weights
- **[Build time]** Many MDX pages could slow builds → Astro's build is fast; 20-30 pages should build in <15s
