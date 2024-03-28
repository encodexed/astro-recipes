import type { APIRoute } from "astro";
import { saveRecipe } from "../../services/db";

export const POST: APIRoute = async ({ request }) => {
	console.log("Attempting to POST (api/recipes)");
	const data = await request.json();
	console.log(data);
	const savedRecipe = await saveRecipe(data.title, data.body); // ?
	console.log("Saved recipe:");
	console.log(savedRecipe);
	return new Response(); // ?
};
