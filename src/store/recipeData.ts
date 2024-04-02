import { atom } from "nanostores";
import type { storedData } from "../services/interfaces";

export const $recipeData = atom<storedData>({
	dateRetrieved: new Date(),
	recipes: [],
});

export const refreshRecipeData = (data: storedData) => {
	$recipeData.set(data);
};
