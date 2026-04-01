# Victor Cinematic Portfolio — Project Analysis

> Last updated: March 2026 — reflects the full dual-composition architecture.

This Remotion project builds **two distinct cinematic videos** for a personal portfolio: a long-form Cinematic Portfolio Reveal and a short-form SaaS Anatomy video.

---

## Compositions

### 1. `CinematicPortfolio` — Long-form Portfolio Reveal
- **Duration:** 2820 frames (47 seconds) at 60 FPS
- **Dimensions:** 3840×2160 (4K)
- **Concept:** A full cinematic scroll through the portfolio website, section by section, with macro 3D camera movement and a zoom-out finale.

### 2. `SiteAnatomyProcess` — SaaS Anatomy Short
- **Duration:** 900 frames (15 seconds) at 60 FPS
- **Dimensions:** 1920×1080 (FHD)
- **Concept:** A "Component Assembly" metaphor — a SaaS website builds itself piece by piece in 3D space, with breather screens and a close-up reveal.

---

## Architecture

### Root Orchestrator — `src/Root.tsx`
Registers both `<Composition />` instances. `CinematicPortfolio` uses a Zod schema (`cinematicSchema`) for type-safe `defaultProps` covering timing, scale, and per-scene scroll offsets. `SiteAnatomyProcess` has no external props.

---

## SiteAnatomyProcess Architecture

### Timeline (900 frames / 15s @ 60fps)

| Frames   | Time       | Component             | Description                              |
|----------|------------|-----------------------|------------------------------------------|
| 0–120    | 0–2s       | `BreatherScreen`      | "A ideia toma forma." + subtitle         |
| 120–480  | 2–8s       | `AssemblyScene`       | 3D assembly of all 5 site sections       |
| 480–570  | 8–9.5s     | `BreatherScreen`      | "Cada detalhe importa."                  |
| 570–750  | 9.5–12.5s  | `CloseUpScene`        | Zoom into feature card with CTA          |
| 750–810  | 12.5–13.5s | `BreatherScreen`      | "Pronto para o futuro."                  |
| 810–900  | 13.5–15s   | `FinalRevealScreen`   | White-theme logo + CTA reveal            |

### Key Scene Files (`src/scenes/`)

| File                     | Role                                                                 |
|--------------------------|----------------------------------------------------------------------|
| `AnatomyOrchestrator.tsx`| Main timeline — sequences all phases with `<Sequence>` wrappers      |
| `AssemblyScene.tsx`      | 3D drone camera + animated site sections in normal flow              |
| `CloseUpScene.tsx`       | Zoom-in to a glassmorphism feature card with shimmer CTA button       |

### Key Component Files (`src/components/`)

| File                   | Role                                                                       |
|------------------------|----------------------------------------------------------------------------|
| `AssembledPart.tsx`    | Wrapper that animates children from `zOffset` → 0 on Z-axis via `spring`  |
| `BreatherScreen.tsx`   | Dark serif typography screen with radial gradient + fade in/out            |
| `FinalRevealScreen.tsx`| Light-theme reveal: profile photo, gradient name, separator, CTAs          |
| `NavbarBlock.tsx`      | White navbar with logo, links, gradient "Hire me" button                   |
| `HeroBlock.tsx`        | Hero section: profile image, headline, stats, two CTA buttons              |
| `CardsBlock.tsx`       | 4-column grid of service cards (iOS, SaaS, Architecture, Design)           |
| `SidebarBlock.tsx`     | Left sidebar (tech stack, location, availability) + projects + git chart   |

### `AssembledPart` Animation Mechanic
Each site section flies in from the **Z-axis** independently, with a cascading delay:
```
zProgress = spring(frame - delay, fps, { damping: 16, stiffness: 80 })
translateZ = interpolate(zProgress, [0, 1], [zOffset, 0])
opacity    = interpolate(zProgress, [0, 0.3, 1], [0, 0.6, 1])
translateY = interpolate(zProgress, [0, 1], [60, 0])
```
Sections are in **normal document flow** (not `position: absolute`) so they stack vertically without overlap.

### `AssemblyScene` Camera System
The 3D world container uses `transformStyle: preserve-3d` + `perspective: 2800px`. Camera is animated purely via CSS transforms on the world container. All `interpolate` input ranges are strictly within `[0, durationInFrames]` (360 frames):

| Property    | Start → End        | Effect                          |
|-------------|--------------------|---------------------------------|
| `rotateX`   | 48° → 0°           | Bird's eye → front-on           |
| `rotateY`   | -22° → 0°          | Side angle → straight           |
| `scale`     | 0.28 → 0.82        | Zoom in as assembly completes   |
| `translateY`| 480px → -200px     | Camera follows sections top→mid |
| `translateX`| 80px → 0px         | Subtle lateral drift            |

---

## CinematicPortfolio Architecture

### Scene Files (`src/scenes/`)
`FullJourneySequence.tsx` orchestrates 6 scenes over ~47s with a global zoom-out finale.

| Scene              | Content                    |
|--------------------|----------------------------|
| `HeroScene.tsx`    | Portfolio intro with name  |
| `AboutScene.tsx`   | Bio / profile summary      |
| `ExperienceScene.tsx` | Work history timeline   |
| `SkillsScene.tsx`  | Technology grid            |
| `ProjectsScene.tsx`| Featured projects showcase |
| `FooterScene.tsx`  | CTA / outro                |

### Render Components (`src/components/`)
Each scene pairs with a `*Render.tsx` component (e.g. `HeroRender.tsx`, `AboutRender.tsx`) that handles visual layout using Tailwind CSS and Remotion animation hooks.

---

## Styling System
- **Tailwind CSS v4** via `@import "tailwindcss"` in `index.css`
- **CSS Variables** in `:root`: `--color-bg`, `--color-text`, `--color-primary` (#2563eb), `--color-muted`, `--color-border`
- **White/Light Theme** for site sections; CSS vars give `#fdfdfd` background
- **Dark Theme** for scene backgrounds and breather screens (deep indigo/black radial gradients)
- **Accent palette:** Indigo (#6366f1) → Violet (#8b5cf6) for all CTAs and highlights

---

## Automation
A GitHub Actions workflow (`.github/workflows/build-video.yml`) triggers on push to `main` or manual dispatch to render a 60 FPS HD WebM video and commit it to `docs/showcase.webm`.
