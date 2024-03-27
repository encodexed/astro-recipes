import { createClient } from "@libsql/client";
import "dotenv/config";

const client = createClient({
	url: "libsql://astro-recipes-encodexed.turso.io",
	authToken: process.env.TURSO_TOKEN,
});

export async function saveRecipe(title: string, body: string) {
	const recipe = { title, body };

	await client.execute({
		sql: `INSERT INTO recipes VALUES (${title}, ${body})`,
		args: recipe,
	});

	return recipe;
}

export async function fetchRecipes() {
	const res = await client.execute("SELECT * FROM recipes");
	return res.rows;
}
