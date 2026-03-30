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
