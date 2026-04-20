## ADDED Requirements

### Requirement: Color token system
The design system SHALL define a color token system using CSS custom properties. The system SHALL include semantic tokens for: background (primary, secondary, elevated), foreground (primary, secondary, muted), accent (primary gradient, secondary), border (default, subtle), and status (success, warning, error). The dark theme SHALL be the default. A light theme variant SHALL be supported.

#### Scenario: Dark theme renders correctly
- **WHEN** the site loads with no user preference or with `prefers-color-scheme: dark`
- **THEN** the dark color scheme is applied: slate-950 backgrounds, slate-50 text, indigo/violet accent gradients

#### Scenario: Light theme toggle
- **WHEN** a user activates the light theme toggle
- **THEN** all semantic color tokens switch to light values (white backgrounds, dark text) without layout changes

### Requirement: Typography scale
The design system SHALL define a typography scale with: display (48-64px, -0.025em tracking), h1 (36-48px), h2 (28-36px), h3 (20-24px), body (16px, 1.6 line-height), small (14px), and mono (14-16px). Headlines SHALL use Inter or Geist Sans. Code blocks SHALL use JetBrains Mono or Geist Mono. Font loading SHALL use `font-display: swap`.

#### Scenario: Typography hierarchy is clear
- **WHEN** a user views a documentation page with h1, h2, h3, body, and code elements
- **THEN** each level is visually distinct with appropriate size, weight, and spacing

### Requirement: Component library
The design system SHALL provide reusable components: Button (primary, secondary, ghost variants), Card (glassmorphism with backdrop-blur, border, and shadow), CodeBlock (syntax-highlighted with copy button, line numbers, language label), Badge (for service status, protocol type), ServiceCard (name, icon, protocol, port), and NavLink (with active state indicator).

#### Scenario: Button variants render distinctly
- **WHEN** primary, secondary, and ghost buttons are displayed together
- **THEN** each variant is visually distinct: primary has gradient background, secondary has border-only, ghost has text-only styling

#### Scenario: Glassmorphism card on dark background
- **WHEN** a Card component is rendered on the dark background
- **THEN** the card shows a semi-transparent background with backdrop-blur, a subtle border, and a soft inner shadow

### Requirement: Spacing and layout system
The design system SHALL use an 8px base grid for spacing (4, 8, 12, 16, 24, 32, 48, 64, 96, 128). Content SHALL be constrained to a max-width of 1280px on marketing pages and 960px on documentation pages. The grid SHALL be 12-column on desktop, collapsing to single-column on mobile.

#### Scenario: Consistent spacing
- **WHEN** any two adjacent sections are inspected
- **THEN** the vertical spacing between them is a multiple of the 8px grid

### Requirement: Animation primitives
The design system SHALL define animation tokens: transition-fast (150ms), transition-base (250ms), transition-slow (500ms), and a spring easing curve for entrances. Elements SHALL fade up on scroll into view. Hover states SHALL transition in 150ms. Animations SHALL respect `prefers-reduced-motion`.

#### Scenario: Reduced motion respected
- **WHEN** a user has `prefers-reduced-motion: reduce` enabled in their OS
- **THEN** all animations are disabled or replaced with instant transitions

#### Scenario: Scroll reveal animations
- **WHEN** a section scrolls into the viewport
- **THEN** its content fades in and translates up over the spring easing duration
