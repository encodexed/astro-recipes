import { defineMiddleware } from "astro:middleware";
import { $recipeData } from "./store/recipeData";
import { fetchRecipes } from "./services/db";
import type { Row } from "@libsql/client";

export const onRequest = defineMiddleware(async (context, next) => {
	console.log("Middleware running.");
	if ($recipeData.get().recipes.length === 0) {
		console.log("Fetching recipes in the middleware");
		const recipes: Row[] = await fetchRecipes();
		const storedData = {
			dateRetrieved: new Date(),
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
