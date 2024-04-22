import { useState } from "react";
import type { NewRecipeData } from "../services/interfaces";
import AddIngredientsList from "./AddIngredientsList";
import AddInstructionsList from "./AddInstructionsList";
import Divider from "./Divider";
const initialRecipeState: NewRecipeData = {
	title: "",
	body: "",
	description: "",
	prepTimeMins: "0",
	cookTimeMins: "0",
	difficulty: "1",
	ingredients: "",
	instructions: "",
	servings: "1",
	imageUrl: "",
};

const Editor = () => {
	const [recipe, setRecipe] = useState<NewRecipeData>(initialRecipeState);
	const [ingredientsCount, setIngredientsCount] = useState<number>(5);
	const [instructionsCount, setInstructionsCount] = useState<number>(5);

	const save = async () => {
		const newRecipe = { ...initialRecipeState, ...recipe };
		await fetch("/api/recipes", {
			method: "POST",
			body: JSON.stringify({ recipe: newRecipe }),
		});
	};

	const updateFormFields = (value: string[], isIngredients: boolean) => {
		const str = value.join("~");
		isIngredients
			? setRecipe({ ...recipe, ingredients: str })
			: setRecipe({ ...recipe, instructions: str });
	};

	return (
		<section className='justify-center my-4 flex flex-col gap-1 items-start'>
			<div className='flex gap-4 w-full'>
				<div className='flex flex-col w-2/3'>
					<label htmlFor='title' className='font-bold'>
						Recipe Name
					</label>
					<input
						className='p-2 border border-gray-400'
						type='text'
						name='title'
						onBlur={(e) => setRecipe({ ...recipe, title: e.target.value })}
						required
					/>
				</div>

				<div className='flex flex-col w-1/3'>
					<label className='font-bold' htmlFor='difficulty'>
						Difficulty
					</label>
					<select
						className='p-2 py-[9px] border border-gray-400 bg-white'
						name='difficulty'
						id='difficulty'
						onChange={(e) =>
							setRecipe({ ...recipe, difficulty: e.target.value })
						}
					>
						<option value='1'>Easy</option>
						<option value='2'>Intermediate</option>
						<option value='3'>Hard</option>
						<option value='4'>Heston Blumenthal</option>
					</select>
				</div>
			</div>

			<div className='flex flex-col w-full'>
				<label className='font-bold' htmlFor='description'>
					Short Description
				</label>
				<input
					className='p-2 border border-gray-400'
					type='text'
					name='description'
					onBlur={(e) => setRecipe({ ...recipe, description: e.target.value })}
					required
				/>
			</div>

			<div className='flex gap-4 w-full'>
				<div className='flex flex-col w-1/3'>
					<label className='font-bold' htmlFor='prepTime'>
						Prep Time (mins)
					</label>
					<input
						className='p-2 border border-gray-400'
						type='number'
						name='prepTime'
						min={0}
						onBlur={(e) =>
							setRecipe({ ...recipe, prepTimeMins: e.target.value })
						}
					/>
				</div>

				<div className='flex flex-col w-1/3'>
					<label className='font-bold' htmlFor='cookTime'>
						Cooking Time (mins)
					</label>
					<input
						className='p-2 border border-gray-400'
						type='number'
						name='cookTime'
						min={0}
						onBlur={(e) =>
							setRecipe({ ...recipe, cookTimeMins: e.target.value })
						}
					/>
				</div>

				<div className='flex flex-col w-1/3'>
					<label className='font-bold' htmlFor='servings'>
						Servings
					</label>
					<input
						className='p-2 border border-gray-400'
						type='number'
						name='servings'
						min={1}
						onBlur={(e) => setRecipe({ ...recipe, servings: e.target.value })}
					/>
				</div>
			</div>

			<Divider />

			<AddIngredientsList
				quantity={ingredientsCount}
				updateFormField={updateFormFields}
			/>
			{/* <AddInstructionsList
				quantity={instructionsCount}
				updateFormField={updateFormFields}
			/> */}

			<Divider />

			<div className='flex flex-col w-full'>
				<label className='font-bold' htmlFor='body'>
					Notes
				</label>
				<textarea
					id='body'
					className='p-2 border border-gray-400'
					onBlur={(e) => setRecipe({ ...recipe, body: e.target.value })}
					placeholder='Add some text you want to display alongside the recipe.'
				/>
			</div>
			<div className='flex flex-col w-full'>
				<label className='font-bold' htmlFor='imageUrl'>
					Image URL
				</label>
				<input
					className='p-2 border border-gray-400'
					type='text'
					name='imageUrl'
					onBlur={(e) => setRecipe({ ...recipe, imageUrl: e.target.value })}
				/>
			</div>
			<button
				className='p-2 border border-gray-400 hover:bg-green-300 bg-white'
				onClick={save}
			>
				Save
			</button>
		</section>
	);
};

export default Editor;
