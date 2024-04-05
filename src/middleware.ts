import { defineMiddleware } from "astro:middleware";
import { $recipeData } from "./store/recipeData";
import { checkRecipesExpired, getRecipes } from "./services/fn";

export const onRequest = defineMiddleware(async (context, next) => {
	const recipes = $recipeData.get();

	if (!recipes || recipes.isExpired) {
		console.log("Getting recipes");
		getRecipes();
	}

	if (checkRecipesExpired()) getRecipes();

	return next();
});
