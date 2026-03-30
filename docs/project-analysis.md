# Victor Cinematic Portfolio - Analysis

This Remotion project is designed to build a high-quality "Product Reveal" style cinematic video for a personal portfolio.

## Architecture

The system uses a highly modular, prop-driven architecture making it easy to configure, re-order scenes, and adjust timings.

### 1. Root Orchestrator (`src/Root.tsx`)
`FullJourneySequence` acts as the main composition orchestrator. It receives timing, scale, and scroll configurations via the `defaultProps` validated by `cinematicSchema`.

### 2. Scene Orchestrators (`src/scenes/`)
The timeline is split into multiple independent scenes, each responsible for wrapping its corresponding visual component and handling translations, spring animations, and absolute positioning on the main canvas timeline:
- `HeroScene.tsx`: Introduces the video.
- `AboutScene.tsx`: Displays profile information.
- `ExperienceScene.tsx`: Showcases work history.
- `SkillsScene.tsx`: Displays a grid of technologies.
- `ProjectsScene.tsx`: Presents past projects.
- `FooterScene.tsx`: The Call to Action / Outro sequence.

### 3. Rendering Components (`src/components/`)
Each Scene pairs with a static rendering component (e.g., `HeroRender.tsx`, `AboutRender.tsx`) which handles the exact visual layout using Tailwind CSS. These components use standard React paradigms along with Remotion's animation hooks (`interpolate`, `spring`, `useCurrentFrame`) to manage specific micro-animations synchronized with the overall sequence.

## Styling
The project uses Tailwind CSS v4 alongside native CSS for its base styles. The design emphasizes premium visual treatments including glassmorphism layouts, subtle shadows, and minimalist, dynamic entry animations.

## Automation
The project includes a GitHub Actions workflow (`.github/workflows/build-video.yml`) that triggers on push to the `main` branch (or via manual dispatch) to build a high-definition 60FPS WebM video automatically. The output video (`showcase.webm`) is committed to the `docs/` folder.
