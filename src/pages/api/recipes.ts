import type { APIRoute } from "astro";
import { saveRecipe } from "../../services/db";

export const POST: APIRoute = async ({ request }) => {
	const data = await request.json();
	const savedRecipe = await saveRecipe(data.title, data.body); // ?
	console.log(savedRecipe);
	return new Response(); // ?
};
