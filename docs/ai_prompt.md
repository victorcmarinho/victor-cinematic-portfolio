# AI Prompt — Victor Cinematic Portfolio

Use the prompts below to instruct an AI coding assistant to recreate this project from scratch, or to generate a similar Remotion cinematic video for any other repository.

---

## Prompt 1 — Recreate this exact project

```text
Act as a Senior Software Engineer and Creative Director specializing in Remotion and React.

I want you to recreate a Remotion project called "victor-cinematic-portfolio" that produces
two cinematic videos:

───────────────────────────────────────────
COMPOSITION 1: CinematicPortfolio
───────────────────────────────────────────
- 3840×2160, 60 FPS, ~47 seconds (2820 frames)
- A full-scroll cinematic reveal of a personal portfolio website.
- Orchestrated by `FullJourneySequence.tsx`, controlled by a Zod schema with typed defaultProps:
  - Per-scene timing: { startFrame, durationInFrames, scrollYOffset }
  - Global effects: { baseScale, zoomOutScale, zoomOutStartFrame, finalScrollY }
- 6 scenes: Hero, About, Experience, Skills, Projects, Footer
- Each scene has a Scene wrapper (`*Scene.tsx`) and a Render component (`*Render.tsx`).
- Render components use Tailwind CSS v4 + CSS variables for the white/light theme:
  --color-bg: #fdfdfd, --color-text: #171717, --color-primary: #2563eb
- Animations use `spring` and `interpolate` from Remotion for smooth staggered entry.

───────────────────────────────────────────
COMPOSITION 2: SiteAnatomyProcess
───────────────────────────────────────────
- 1920×1080, 60 FPS, 15 seconds (900 frames)
- Concept: "Anatomia de um SaaS" — a SaaS website assembles itself piece-by-piece in 3D.

TIMELINE:
  0–120   frames → BreatherScreen: "A ideia toma forma." (subtitle: "Anatomy of a SaaS")
  120–480 frames → AssemblyScene: 3D drone camera + cascading section assembly
  480–570 frames → BreatherScreen: "Cada detalhe importa."
  570–750 frames → CloseUpScene: zoom into glassmorphism feature card with shimmer CTA
  750–810 frames → BreatherScreen: "Pronto para o futuro."
  810–900 frames → FinalRevealScreen: white-theme logo + gradient name + CTAs

KEY COMPONENTS TO BUILD:

1. `AssembledPart` wrapper:
   - Props: children, delay (frames), zOffset (px)
   - Uses `spring` to animate translateZ from zOffset → 0
   - Sections are in NORMAL DOCUMENT FLOW (not absolute positioned) so they stack vertically
   - Formula:
       zProgress = spring({ frame: frame - delay, fps, config: { damping: 16, stiffness: 80 } })
       translateZ = interpolate(zProgress, [0, 1], [zOffset, 0])
       opacity    = interpolate(zProgress, [0, 0.3, 1], [0, 0.6, 1], { clamp })
       translateY = interpolate(zProgress, [0, 1], [60, 0])
   - CRITICAL: return children with opacity: 0 (not null) when frame < delay

2. `AssemblyScene` camera system:
   - Parent: `perspective: 2800px`, `perspectiveOrigin: '50% 45%'`
   - 3D world: `transformStyle: preserve-3d`
   - All interpolate ranges MUST be within [0, durationInFrames] (360 frames)
   - Camera sweep:
       rotateX:    48° → 0°  (bird's eye to front)
       rotateY:   -22° → 0°  (side angle to straight)
       scale:      0.28 → 0.82 (zoom in as assembly completes)
       translateY: 480px → -200px (follows sections)
       translateX: 80px → 0px (lateral drift)
   - 5 site sections in order: Navbar (delay 0), Hero (40), Cards (90), Sidebar (150), Footer (210)
   - Site width: 1440px, section gap: 96px margin-bottom
   - Background: dark radial gradient + indigo grid overlay + ambient glow orbs

3. White-theme site sections (no animations — AnimatedPart handles that):
   - NavbarBlock: logo, nav links, gradient "Hire me" CTA
   - HeroBlock: profile photo with gradient ring, gradient headline, metrics, CTAs
   - CardsBlock: 4-column grid (iOS, SaaS, Architecture, Design) with color-coded tags
   - SidebarBlock: left sidebar (tech stack, location, availability) + projects list + GitHub chart

4. BreatherScreen:
   - Background: `radial-gradient(ellipse at center, #1a1a2e 0%, #000000 70%)`
   - Serif font, 80px, white, letter-spacing animates 6 → 2
   - Optional subtitle prop, spring-animated opacity + translateY
   - Fade in at [0,25] and fade out at [durationInFrames-25, durationInFrames-5]
   - Accent lines: thin horizontal gradient lines top and bottom

5. CloseUpScene:
   - Dark grid background (`rgba(99,102,241,0.06)` lines)
   - Zoom animation: `scale` interpolates from 0.6 → 1.4 over 140 frames
   - Glassmorphism card: `rgba(255,255,255,0.04)`, `backdropFilter: blur(24px)`, `border: 1px solid rgba(255,255,255,0.12)`
   - Card content: green live indicator, heading with gradient span, body text, CTA with shimmer effect, stats row
   - Shimmer: absolutely positioned div with skewed linear gradient, translateX animates from -200 to 400px

6. FinalRevealScreen:
   - Light gradient background: `linear-gradient(135deg, #f8faff, #eef2ff, #f0f4ff)`
   - Profile photo with gradient ring (indigo → violet → lilac)
   - Name: "Victor C. Marinho" with gradient on last name
   - Animated separator line expanding width from 0 → 180px
   - Role tag: "SOFTWARE ENGINEER · APPLE ECOSYSTEM · SAAS" in uppercase letterspacing
   - Two CTA buttons: gradient primary + white outlined secondary

VISUAL IDENTITY:
- Primary accent: Indigo #6366f1 → Violet #8b5cf6 (gradient direction: 135deg)
- Dark backgrounds: deep indigo/black radial gradients for cinematic scenes
- White backgrounds: #f8faff → #eef2ff for site sections and final reveal
- Typography: Inter (sans-serif) for UI, serif font for breather screens
- Animations: always use spring physics over linear interpolation for entrances

TECHNICAL CONSTRAINTS:
- No external libraries beyond: remotion, @remotion/zod-types, lucide-react
- Tailwind CSS v4 imported via `@import "tailwindcss"` in index.css
- All interpolate input ranges must be STRICTLY monotonically increasing within their Sequence's durationInFrames
- AssembledPart must use normal flow layout, NOT absolute positioning

Please build the complete file tree and all component code.
```

---

## Prompt 2 — Adapt the SiteAnatomyProcess to any SaaS/portfolio project

```text
Act as a Senior Software Engineer and Creative Director specializing in Remotion and React.

Create a 15-second, 60 FPS, 1920×1080 Remotion video called "SiteAnatomyProcess" that shows
the "anatomy" of a SaaS or portfolio website assembling itself in 3D space.

ARCHITECTURE REQUIREMENTS:

1. `AssembledPart` wrapper (delay: number, zOffset: number):
   - Animate children from zOffset → 0 on translateZ using spring
   - Sections must be in NORMAL DOCUMENT FLOW (not position: absolute)
   - Show hidden (opacity: 0) before delay, NOT null (to preserve layout)

2. `AssemblyScene` with preserve-3d camera:
   - Dark radial gradient + indigo grid background
   - perspective: ~2800px, perspectiveOrigin: '50% 45%'
   - Camera rotateX: ~45° → 0° (bird's eye to front)
   - Camera rotateY: ~-22° → 0° (side angle drift)
   - Scale from ~0.3 (overview) to ~0.82 (close)
   - translateY panning to follow the assembly
   - IMPORTANT: all interpolate ranges within [0, durationInFrames]

3. Timeline (adapt framing to your content):
   - 0–2s:    BreatherScreen intro (serif font, dark bg, fade in/out)
   - 2–8s:    AssemblyScene (3D assembly of [Navbar, Hero, Feature, Content, Footer])
   - 8–9.5s:  BreatherScreen mid
   - 9.5–12.5s: CloseUpScene (zoom into most impactful component)
   - 12.5–13.5s: BreatherScreen outro
   - 13.5–15s: FinalRevealScreen (light bg, logo, name, CTA)

4. Site sections should have white/light backgrounds with subtle indigo shadows:
   `background: white`, `boxShadow: '0 20px 60px rgba(99,102,241,0.12)'`

5. Breather phrases (customize for your brand):
   - Intro: "[Your tagline]"
   - Mid: "[A key value prop]"
   - Outro: "[Call to action]"

Replace the portfolio content (name, role, projects, skills) with your own.
```

---

## Prompt 3 — Generate a similar long-form cinematic portfolio reveal

```text
Act as an expert React and Remotion developer specializing in cinematic product reveal videos.

I want a 60 FPS, 4K (3840×2160) cinematic showcase video, structured as a full scroll through
my portfolio website. Follow this architecture:

1. Root (`src/Root.tsx`):
   - Use a Zod schema for type-safe defaultProps
   - One `<Composition />` with per-scene timing: { startFrame, durationInFrames, scrollYOffset }
   - Global effects: { baseScale, zoomOutScale, zoomOutStartFrame, finalScrollY }

2. Orchestrator (`src/scenes/FullJourneySequence.tsx`):
   - Accepts all timing and effect props
   - Uses nested `<Sequence>` to drive each scene
   - Ends with a global zoom-out using interpolate on scale

3. Scene + Render pattern:
   - *Scene.tsx: positions and translates the render component on the canvas
   - *Render.tsx: visual layout with Tailwind + CSS variables, micro-animations via spring/interpolate
   - Scenes: Hero, About, Experience, Skills, Projects, Footer (customize as needed)

4. Styling:
   - Tailwind CSS v4 with CSS variables for theming
   - White/light base theme for website elements
   - Micro-animations: staggered translateY + opacity for each text element
   - Premium details: gradient text, subtle drop-shadows, rounded cards

5. GitHub Actions automation:
   - Trigger on push to main or manual dispatch
   - Install deps → npx remotion browser install → npx remotion render
   - Output: docs/showcase.webm committed back to repo

Analyze my repo's color scheme and content, then generate the full file layout and code.
```
