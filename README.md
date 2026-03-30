# Victor Cinematic Portfolio

<p align="center">
  <video src="docs/showcase.webm" autoplay loop muted playsinline width="100%"></video>
</p>

This is a **high-end, 60fps cinematic "Product Reveal"** video built in React using [Remotion](https://www.remotion.dev/). It showcases the portfolio website using a dynamic, prop-driven 3D macro-sequence architecture with spring physics, glassmorphic effects, and Apple-style minimalistic styling.

## Project Structure

- `src/scenes/`: Independent, absolute-positioned wrapper components handling translation and timeline orchestration for their specific scene.
- `src/components/`: Reusable, animated visual pieces (powered by Tailwind CSS and Remotion hooks).
- `src/Root.tsx`: The main `FullJourneySequence` `<Composition />` that orchestrates all scenes and configuration.
- `docs/`: Contains project architecture documentation and an AI prompt template to easily reproduce this high-fidelity video style for any other open-source codebase.

## 🤖 AI Prompt Generator

Want to recreate this cinematic reveal effect for your own project? Check out the specific AI Prompt in:
[**docs/ai_prompt.md**](./docs/ai_prompt.md)

---

## Remotion Commands

**Install Dependencies**

```console
pnpm install
```

**Start Preview**

```console
pnpm run dev
```

**Render video locally**

```console
npx remotion render src/index.ts CinematicPortfolio docs/showcase.webm --codec=vp8 --fps=60 --width=1920 --height=1080
```

**Upgrade Remotion**

```console
pnpm run upgrade
```

## Docs

Get started with Remotion by reading the [fundamentals page](https://www.remotion.dev/docs/the-fundamentals).

## Help

We provide help on our [Discord server](https://discord.gg/6VzzNDwUwV).

## Issues

Found an issue with Remotion? [File an issue here](https://github.com/remotion-dev/remotion/issues/new).

## License

Note that for some entities a company license is needed. [Read the terms here](https://github.com/remotion-dev/remotion/blob/main/LICENSE.md).
