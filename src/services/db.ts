import { createClient } from "@libsql/client";
import "dotenv/config";

const client = createClient({
	url: "libsql://astro-recipes-encodexed.turso.io",
	authToken: process.env.TURSO_TOKEN,
});

export async function saveRecipe(title: string, body: string) {
	const slug = title.replaceAll(" ", "-").toLowerCase();
	const recipe = { title, body, slug };

	await client.execute({
		sql: `INSERT INTO recipes (title, body, slug) VALUES (?, ?, ?)`,
		args: [title, body, slug],
	});

	return recipe;
}

export async function fetchRecipes() {
	const res = await client.execute("SELECT * FROM recipes");
	return res.rows;
}
