import { z, defineCollection } from "astro:content";
const recipeCollection = defineCollection({
	type: "content",
	schema: z.object({
		title: z.string(),
		tags: z.array(z.string()),
		draft: z.boolean(),
	}),
});

export const collections = {
	recipes: recipeCollection,
};
