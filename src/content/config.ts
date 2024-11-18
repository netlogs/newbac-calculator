import { defineCollection, z } from 'astro:content';

// 2. Define your collection(s)
const blogCollection = defineCollection({
  schema: z.object({
    draft: z.boolean(),
    title: z.string(),
    snippet: z.string(),
    image: z.object({
      src: z.string(),
      alt: z.string(),
    }),
    publishDate: z.string().transform(str => new Date(str)),
    author: z.string().default('liarpzu'),
    category: z.string(),
    tags: z.array(z.string()),
  }),
});

export const collections = {
  'blog': blogCollection
};