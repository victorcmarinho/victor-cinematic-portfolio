import { z } from 'zod';

export const SceneConfigSchema = z.object({
  startFrame: z.number().min(0),
  durationInFrames: z.number().min(1),
  scrollYOffset: z.number(),
});

export type SceneConfig = z.infer<typeof SceneConfigSchema>;

export const cinematicSchema = z.object({
  fps: z.number().min(1).max(120),
  globalDuration: z.number().min(1),
  width: z.number().min(1),
  height: z.number().min(1),
  
  scenes: z.object({
    hero: SceneConfigSchema,
    about: SceneConfigSchema,
    experience: SceneConfigSchema,
    skills: SceneConfigSchema,
    projects: SceneConfigSchema,
    footer: SceneConfigSchema,
  }),

  effects: z.object({
    baseScale: z.number(),
    zoomOutScale: z.number(),
    zoomOutStartFrame: z.number(),
    finalScrollY: z.number(),
  })
});

export type CinematicProps = z.infer<typeof cinematicSchema>;

export const defaultCinematicConfig: CinematicProps = {
  fps: 60,
  globalDuration: 3000,
  width: 3840,
  height: 2160,

  scenes: {
    hero: { startFrame: 0, durationInFrames: 480, scrollYOffset: 140 },
    about: { startFrame: 600, durationInFrames: 240, scrollYOffset: -549 },
    experience: { startFrame: 960, durationInFrames: 360, scrollYOffset: -1438 },
    skills: { startFrame: 1440, durationInFrames: 240, scrollYOffset: -2277 },
    projects: { startFrame: 1800, durationInFrames: 360, scrollYOffset: -3066 },
    footer: { startFrame: 2280, durationInFrames: 180, scrollYOffset: -3780 },
  },

  effects: {
    baseScale: 2.0,
    zoomOutScale: 0.8,
    zoomOutStartFrame: 2580,
    finalScrollY: -2200
  }
};
