import { createClient } from "@libsql/client";
import "dotenv/config";
import type { NewRecipeData } from "./interfaces";

const client = createClient({
	url: "libsql://astro-recipes-encodexed.turso.io",
	authToken: process.env.TURSO_TOKEN,
});

export async function saveRecipe(recipe: NewRecipeData) {
	const slug = recipe.title.replaceAll(" ", "-").toLowerCase();
	const {
		title,
		body,
		difficulty,
		prepTimeMins,
		cookTimeMins,
		ingredients,
		instructions,
		servings,
		imageUrl,
	} = recipe;

	await client.execute({
		sql: `INSERT INTO recipes (title, body, difficulty, prep_time, cooking_time, ingredients, instructions, servings, image_url, slug) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
		args: [
			title,
			body,
			difficulty,
			prepTimeMins,
			cookTimeMins,
			ingredients,
			instructions,
			servings,
			imageUrl,
			slug,
		],
	});

	return recipe;
}

export async function fetchRecipes() {
	const res = await client.execute("SELECT * FROM recipes");
	return res.rows;
}
