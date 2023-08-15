// 1. Import utilities from `astro:content`
import { z,defineCollection } from 'astro:content';
// 2. Define your collection(s)
const accessories = defineCollection({ 
  type:'content',
  schema: z.object({
  name: z.string(),
  brand: z.string(),
  price: z.number(),
  description: z.string(),
  photo : z.array(z.string()),
}) });
// 3. Export a single `collections` object to register your collection(s)
//    This key should match your collection directory name in "src/content"
export const collections = {
  'accessories': accessories,
};