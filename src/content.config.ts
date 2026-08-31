import { defineCollection, z } from 'astro:content';
import { file } from 'astro/loaders';

const experience = defineCollection({
  loader: file('src/content/experience.json'),
  schema: z.object({
    id: z.string(),
    company: z.string(),
    role: z.string(),
    dateRange: z.string(),
    order: z.number(),
    bullets: z.array(z.string()),
  }),
});

const patents = defineCollection({
  loader: file('src/content/patents.json'),
  schema: z.object({
    id: z.string(),
    title: z.string(),
    type: z.string(),
    year: z.string(),
    description: z.string(),
  }),
});

const education = defineCollection({
  loader: file('src/content/education.json'),
  schema: z.object({
    id: z.string(),
    institution: z.string(),
    credential: z.string(),
    dateRange: z.string(),
    notes: z.array(z.string()).optional(),
  }),
});

const publications = defineCollection({
  loader: file('src/content/publications.json'),
  schema: z.object({
    id: z.string(),
    title: z.string(),
    authors: z.string(),
    venue: z.string(),
    year: z.string(),
    summary: z.string(),
    url: z.string().optional(),
  }),
});

const projects = defineCollection({
  loader: file('src/content/projects.json'),
  schema: z.object({
    id: z.string(),
    title: z.string(),
    description: z.string(),
    stack: z.array(z.string()),
    url: z.string(),
  }),
});

export const collections = { experience, patents, education, publications, projects };
