## Why

LocalCloud — a GCP emulation platform running 15 Google Cloud services in a single Docker container — has no public-facing website. The current site is a bare VitePress scaffold with two placeholder pages and zero content. To drive adoption of this open-source project, LocalCloud needs a polished, high-conversion marketing and documentation website that communicates its value proposition ("LocalStack for Google Cloud") and gets developers from discovery to `docker run` in minutes. The design should match the quality bar set by top developer-tool websites like Hex.tech, Vercel, and Linear — dark-first, premium, and technically credible.

## What Changes

- **Replace the bare VitePress scaffold** with a fully custom-designed website built on a modern stack (Next.js/Astro or similar SSG)
- **Create a hero-driven landing page** with gradient text, animated service grid, and clear CTA ("Get Started" → single docker run command)
- **Build a comprehensive documentation section** covering all 15 emulated GCP services, CLI reference, configuration, seed data, and SDK integration guides
- **Design a dark-first visual system** inspired by Hex.tech's aesthetic: deep purple/slate palette, glassmorphism cards, subtle grid textures, premium typography, and spring-based animations
- **Add key marketing pages**: Features overview, Services catalog (15 services with support matrices), Architecture diagram, Quickstart guide, and GitHub-linked community page
- **Implement responsive design** with mobile-first breakpoints
- **Deploy to GitHub Pages** with the existing CI/CD workflow

## Capabilities

### New Capabilities
- `landing-page`: Hero section, value proposition, feature highlights, service grid, quickstart snippet, social proof (GitHub stars, comparisons), and footer
- `design-system`: Color tokens (dark/light), typography scale, spacing system, component library (cards, buttons, code blocks, service badges, navigation), animation primitives
- `documentation`: Full docs structure — Getting Started, Services (15 pages), CLI Reference, Configuration, Seed Data, SDK Examples, Architecture, FAQ
- `services-catalog`: Interactive catalog of all 15 GCP services with status, protocol, port, support matrix, and per-service detail pages
- `site-infrastructure`: Project setup (framework, build, deploy), routing, SEO metadata, OpenGraph images, analytics-ready structure, GitHub Pages deployment

### Modified Capabilities

_None — this is a greenfield website build._

## Impact

- **Code**: Entire `docs/` directory will be replaced with a new site structure; `package.json` dependencies will change significantly
- **Build/Deploy**: `.github/workflows/deploy.yml` will need updates for the new build system
- **Dependencies**: New frontend framework, CSS system (Tailwind or CSS variables), syntax highlighting library, and potentially MDX/content layer
- **Configuration**: `docs/.vitepress/` config will be replaced by new framework config
- **External**: No backend changes; the website is purely static and reads no live data from LocalCloud
