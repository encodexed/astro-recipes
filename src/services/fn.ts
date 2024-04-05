import type { Row } from "@libsql/client";
import { fetchRecipes } from "./db";
import type { storedData } from "./interfaces";
import { $recipeData } from "../store/recipeData";

export const getRecipes = async (): Promise<void> => {
	console.log("Getting recipes...");
	const recipes: Row[] = await fetchRecipes();
	const storedData: storedData = {
		dateRetrieved: new Date(),
		isExpired: false,
		recipes,
	};
	$recipeData.set(storedData);
};

export const checkRecipesExpired = (): boolean => {
	const now = new Date();
	const then = $recipeData.get().dateRetrieved;
	return now.getTime() > then.getTime() + 10 * 60 * 1000; // 10 minute expiry for old data
};
