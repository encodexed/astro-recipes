import type { Row } from "@libsql/client";

export interface storedData {
	dateRetrieved: Date;
	isExpired: boolean;
	recipes: Row[];
}

export interface NewRecipeData {
	title: string;
	body: string;
	description: string;
	prepTimeMins: string;
	cookTimeMins: string;
	difficulty: string;
	ingredients: string;
	instructions: string;
	servings: string;
	imageUrl: string;
}
