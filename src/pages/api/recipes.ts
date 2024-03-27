import type { APIRoute } from "astro";
import { saveRecipe } from "../../services/db";

export const post: APIRoute = async ({ request }) => {
	const data = await request.json();
	await saveRecipe(data.title, data.body);
	return new Response();
};
