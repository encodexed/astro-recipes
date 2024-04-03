import type { Row } from "@libsql/client";

export interface storedData {
	dateRetrieved: Date;
	isExpired: boolean;
	recipes: Row[];
}

export interface NewRecipeData {
	title: string;
	body: string;
	prepTimeMins: number;
	cookTimeMins: number;
	difficulty: number;
	ingredients: string;
	instructions: string;
	servings: string;
	imageUrl: string;
}
