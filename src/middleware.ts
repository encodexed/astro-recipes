import { defineMiddleware } from "astro:middleware";
import { $recipeData } from "./store/recipeData";
import { checkRecipesExpired, getRecipes } from "./services/fn";

export const onRequest = defineMiddleware(async (context, next) => {
	const recipes = $recipeData.get();
	// % This will send API calls on every request when there's no recipes in the db
	if (
		recipes.recipes.length === 0 ||
		recipes.isExpired ||
		checkRecipesExpired()
	)
		getRecipes();
	return next();
});
