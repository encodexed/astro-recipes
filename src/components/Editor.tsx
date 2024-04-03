import { useEffect, useState } from "react";
import type { NewRecipeData } from "../services/interfaces";
import AddIngredientsList from "./AddIngredientsList";
import AddInstructionsList from "./AddInstructionsList";
const initialRecipeState: NewRecipeData = {
	title: "",
	body: "",
	prepTimeMins: 0,
	cookTimeMins: 0,
	difficulty: 1,
	ingredients: "",
	instructions: "",
	servings: "",
	imageUrl: "",
};

const Editor = () => {
	const [recipe, setRecipe] = useState<NewRecipeData>(initialRecipeState);
	const [ingredientsCount, setIngredientsCount] = useState<number>(5);
	const [instructionsCount, setInstructionsCount] = useState<number>(5);

	const save = async () => {
		await fetch("/api/recipes", {
			method: "POST",
			body: JSON.stringify({ recipe }), // * Fix this section as it needs to apply business logic before it can be placed in db
		});
	};

	const updateFormFields = (value: string[], isIngredients: boolean) => {
		const str = value.join("~");
		isIngredients
			? setRecipe({ ...recipe, ingredients: str })
			: setRecipe({ ...recipe, instructions: str });
	};

	useEffect(() => {
		console.log(recipe);
	}, [recipe]);

	return (
		<section className='flex justify-center'>
			<div className='my-4 p-4 w-1/3 border border-sky-300 flex flex-col gap-1 items-start'>
				<div className='flex gap-1 items-center'>
					<label htmlFor='title'>Title</label>
					<input
						className='p-2 border border-gray-400 w-2/3'
						type='text'
						name='title'
						// value={recipe.title}
						onBlur={(e) => setRecipe({ ...recipe, title: e.target.value })}
					/>
				</div>

				<div className='flex gap-1 items-center'>
					<label htmlFor='difficulty'>Difficulty</label>
					<input
						className='p-2 border border-gray-400 w-2/3'
						type='number'
						name='difficulty'
						min={1}
						max={5}
						// value={recipe.difficulty}
						onBlur={(e) =>
							setRecipe({ ...recipe, difficulty: +e.target.value })
						}
					/>
				</div>

				<div className='flex gap-1 items-center'>
					<label htmlFor='prepTime'>Prep Time (mins)</label>
					<input
						className='p-2 border border-gray-400 w-2/3'
						type='number'
						name='prepTime'
						// value={recipe.prepTimeMins}
						onBlur={(e) =>
							setRecipe({ ...recipe, prepTimeMins: +e.target.value })
						}
					/>
				</div>

				<div className='flex gap-1 items-center'>
					<label htmlFor='cookTime'>Cooking Time (mins)</label>
					<input
						className='p-2 border border-gray-400 w-2/3'
						type='number'
						name='cookTime'
						// value={recipe.cookTimeMins}
						onBlur={(e) =>
							setRecipe({ ...recipe, cookTimeMins: +e.target.value })
						}
					/>
				</div>
				<AddIngredientsList
					quantity={ingredientsCount}
					updateFormField={updateFormFields}
				/>
				<AddInstructionsList
					quantity={instructionsCount}
					updateFormField={updateFormFields}
				/>

				<div className='flex gap-1 items-center'>
					<label htmlFor='body'>Notes</label>
					<textarea
						id='body'
						className='p-2 border border-gray-400 w-2/3'
						// value={recipe.body}
						onBlur={(e) => setRecipe({ ...recipe, body: e.target.value })}
						placeholder='Add some text you want to display alongside the recipe.'
					/>
				</div>
				<button
					className='p-2 border border-grey-300 hover:bg-green-300'
					onClick={save}
				>
					Save
				</button>
			</div>
		</section>
	);
};

export default Editor;
