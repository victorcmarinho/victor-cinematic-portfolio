# Cinematic Video AI Prompt

You can use the following prompt to instruct an AI coding assistant to analyze any repository and generate a similarly structured Remotion cinematic video for it.

---

**Prompt:**

```text
Act as an expert React and Remotion developer specializing in high-end, cinematic product reveal videos. 

I want to create a 60 FPS, HD cinematic showcase video for my project repository (similar to an Apple or Nintendo Switch product teaser). Analyze my project's source code to understand its core features, color scheme, and typography. Then, generate a Remotion project with a highly modular, prop-driven architecture, following these exact specifications:

1. **Architecture & Orchestration (`src/Root.tsx`)**
   - Use a central `<Composition />` component with a Zod schema to control global settings (FPS, duration, dimensions).
   - Divide the video into discrete, logical scenes (e.g., Intro, Core Feature 1, Core Feature 2, Outro).
   - Pass start frames, durations, and spatial offsets (like Y-axis scroll or Z-axis scale) to the main sequence wrapper via props.

2. **Scenes (`src/scenes/` and `src/components/`)**
   - Create a separate UI visual component for each scene.
   - Wrap each UI component in an orchestrator wrapper that handles its specific entry/exit animations, 3D translations, and absolute positioning.
   - Use Remotion hooks (`useCurrentFrame`, `useVideoConfig`, `interpolate`, `spring`) to manage smooth, synchronized transitions.
   - Avoid hardcoded offset values in the UI components; rely on props passed from the main layout sequence to allow highly-editable timelines.

3. **Visual Aesthetics**
   - Focus on premium visual design: glassmorphism, subtle glowing drop-shadows, and dynamic micro-animations.
   - Use Tailwind CSS v4 along with custom configuration to match my project's specific brand color palette.
   - Ensure a minimalist layout where UI elements emerge gracefully with smooth spring physics rather than snapping instantly into view.

4. **Automation**
   - Include a GitHub Action workflow file that installs dependencies (specifying my package manager), runs `npx remotion browser install`, and uses `npx remotion render` to build a 60 FPS HD WebM video automatically upon pushing to the `main` branch.
   - The output video should be saved in the `docs/` folder as `showcase.webm` and automatically committed back to the repository.

Please start by outlining the scene structure you recommend for my project, then provide the full file layout and code.
```
