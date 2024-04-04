import type { APIRoute } from "astro";
import { saveRecipe } from "../../services/db";
import { setRecipesAsExpired } from "../../store/recipeData";

export const POST: APIRoute = async ({ request }) => {
	const data = await request.json();
	console.log(data);
	const savedRecipe = await saveRecipe(data.recipe); // ?
	console.log("Recipe saved. Existing data has been marked as expired.");
	setRecipesAsExpired();
	console.log(savedRecipe);
	return new Response(); // ?
};
