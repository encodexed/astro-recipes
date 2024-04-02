import { defineMiddleware } from "astro:middleware";
import { fetchRecipes } from "./services/db";
import type { Row } from "@libsql/client";

export const onRequest = defineMiddleware(async ({ locals }, next) => {
	console.log("Middleware running.");
	console.log({ locals });

	// ! Locals is not persistent data, we will need to use NanoStores or find a way to use sessionStorage

	if (!locals.storedData) {
		console.log("Fetching recipes in the middleware");
		const recipes: Row[] = await fetchRecipes();
		const storedData = {
			dateRetrieved: new Date(),
			recipes,
		};
		locals.storedData = storedData;
	}

	return next();
});
