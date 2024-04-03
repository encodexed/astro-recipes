import { atom } from "nanostores";
import type { storedData } from "../services/interfaces";

export const $recipeData = atom<storedData>({
	dateRetrieved: new Date(),
	isExpired: false,
	recipes: [],
});

export const refreshRecipeData = (data: storedData) => {
	$recipeData.set(data);
};

export const setRecipesAsExpired = () => {
	$recipeData.set({
		...$recipeData.get(),
		isExpired: true,
	});
};
