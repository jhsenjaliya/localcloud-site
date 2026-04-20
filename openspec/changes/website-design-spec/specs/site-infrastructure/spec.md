## ADDED Requirements

### Requirement: Astro project setup
The site SHALL be built using Astro 4+ with MDX content collections. The project SHALL include: TypeScript configuration, Tailwind CSS v4, MDX integration, and a sitemap generator. The project SHALL build to static HTML suitable for GitHub Pages deployment.

#### Scenario: Project builds successfully
- **WHEN** a developer runs `npm run build`
- **THEN** the site builds to static HTML/CSS/JS in the output directory with zero errors

#### Scenario: Development server starts
- **WHEN** a developer runs `npm run dev`
- **THEN** a local dev server starts with hot module replacement

### Requirement: GitHub Pages deployment
The site SHALL deploy to GitHub Pages via GitHub Actions on every push to the `main` branch. The workflow SHALL: install dependencies, build the Astro site, and deploy the output directory as a GitHub Pages artifact. The base path SHALL be configurable for project-site URLs.

#### Scenario: Automated deployment
- **WHEN** a commit is pushed to the main branch
- **THEN** the GitHub Actions workflow builds and deploys the site to GitHub Pages within 5 minutes

### Requirement: SEO metadata
Every page SHALL include: title tag (page-specific), meta description, Open Graph tags (og:title, og:description, og:image, og:url), Twitter card tags, and canonical URL. The landing page SHALL have a custom OG image showing the LocalCloud logo and tagline.

#### Scenario: Social share preview
- **WHEN** a user shares the landing page URL on Twitter/LinkedIn
- **THEN** the preview card shows the LocalCloud OG image, title ("LocalCloud — Google Cloud Platform in a box"), and description

### Requirement: Performance targets
The site SHALL achieve Lighthouse scores of 95+ for Performance, Accessibility, Best Practices, and SEO. Total page weight for the landing page SHALL be under 500KB (excluding fonts). First Contentful Paint SHALL be under 1.5 seconds on a 3G connection.

#### Scenario: Lighthouse audit passes
- **WHEN** a Lighthouse audit is run on the deployed landing page
- **THEN** all four categories score 95 or above

### Requirement: Responsive breakpoints
The site SHALL be responsive across four breakpoints: mobile (< 640px), tablet (640-1024px), desktop (1024-1440px), and wide (> 1440px). All content SHALL be readable and navigable at every breakpoint. No horizontal scrolling SHALL occur at any viewport width.

#### Scenario: Mobile layout
- **WHEN** the site is viewed at 375px width
- **THEN** navigation collapses to hamburger menu, content is single-column, service grid is 1-2 columns, and all text is readable without zooming

#### Scenario: Wide desktop layout
- **WHEN** the site is viewed at 1920px width
- **THEN** content is centered with max-width constraints, whitespace is balanced, and the layout does not stretch uncomfortably

### Requirement: Content collections for docs and services
Astro content collections SHALL be defined for: docs (MDX files with frontmatter: title, description, order, section) and services (YAML/JSON data with: name, slug, port, protocol, type, enabled, supported features, unsupported features, env_var). Collection schemas SHALL be validated at build time.

#### Scenario: Invalid frontmatter caught at build
- **WHEN** a docs MDX file is missing a required frontmatter field (e.g., title)
- **THEN** the build fails with a clear error message indicating the missing field and file
