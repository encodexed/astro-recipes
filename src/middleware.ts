import { defineMiddleware } from "astro:middleware";
import { $recipeData } from "./store/recipeData";
import { fetchRecipes } from "./services/db";
import type { Row } from "@libsql/client";

export const onRequest = defineMiddleware(async (context, next) => {
	console.log("Middleware running.");
	const recipes = $recipeData.get();

	if (recipes.recipes.length === 0 || recipes.isExpired) {
		console.log("Fetching recipes in the middleware");
		const recipes: Row[] = await fetchRecipes();
		const storedData = {
			dateRetrieved: new Date(),
			isExpired: false,
			recipes,
		};
		console.log("Logging storedData:");
		console.log({ storedData });
		$recipeData.set(storedData);
		console.log("Logging Nanostore data:");
		console.log($recipeData.get().recipes);
	} else {
		console.log("Recipes data already exists");
	}
	return next();
});
