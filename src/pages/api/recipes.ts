import type { APIRoute } from "astro";
import { saveRecipe } from "../../services/db";
import { setRecipesAsExpired } from "../../store/recipeData";

export const POST: APIRoute = async ({ request }) => {
	const data = await request.json();
	const savedRecipe = await saveRecipe(data.recipe);
	setRecipesAsExpired();
	return new Response();
};
