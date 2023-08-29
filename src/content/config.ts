// 1. Import utilities from `astro:content`
import { z,defineCollection, reference } from 'astro:content';
// 2. Define your collection(s)
const product = defineCollection({ 
  type:'content',
  schema:({image})=> 
    z.object({
      name: z.string(),
      brand: z.string(),
      price: z.number(),
      categories: z.array(reference("categories")),
      thumbnail: image()
  }) 
});

const categories = defineCollection({
  type:"content",
  schema:({image})=>
    z.object({
      name: z.string(),
      id: z.string(),
      hero: image()
    })
})


const watch = defineCollection({
  type:'content',
  schema:({image})=>
    z.object({
      description: z.string(),
      photo : z.array(image()),
      product: reference("product"),
    })

})
// 3. Export a single `collections` object to register your collection(s)
//    This key should match your collection directory name in "src/content"
export const collections = {
  'product': product,
  'categories': categories,
  'watch': watch
};