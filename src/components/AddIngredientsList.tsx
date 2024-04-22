import { useEffect, useState } from "react";
import IngredientTag from "./IngredientTag";

const AddIngredientsList = ({
	quantity,
	updateFormField,
}: {
	quantity: number;
	updateFormField: (value: string[], isIngredients: boolean) => void;
}) => {
	const [values, setValues] = useState<string[]>([]);
	const [ingredientField, setIngredientField] = useState<string>("");

	const list = values.map((ingredient, index) => {
		return (
			<IngredientTag
				key={`${ingredient.charAt(0)}-${index}`}
				index={index}
				name={ingredient}
			/>
		);
	});

	const addToList = () => {
		setValues([...values, ingredientField]);
		setIngredientField("");
	};

	const removeFromList = (index: number) => {
		// const newValues = [...values].slice(index, index + 1);
		// setValues(newValues);
	};

	return (
		<div className='flex flex-col w-full justify-center'>
			<label htmlFor='ingredients' className='font-bold'>
				Ingredients List
			</label>
			<p>
				Add individual ingredients into the field below. Add an amount required
				if it makes sense to.
			</p>
			<div className='flex gap-4 my-2'>
				<div className='w-1/2'>
					<input
						className='p-2 border border-gray-400 w-full'
						type='text'
						id='ingredients'
						value={ingredientField}
						onChange={(e) => {
							setIngredientField(e.target.value);
						}}
					/>
				</div>
				<div className='w-1/2'>
					<button
						onClick={addToList}
						className='p-2 border border-gray-400 hover:bg-green-300 bg-white'
					>
						Add Ingredient
					</button>
				</div>
			</div>
			<div className='flex flex-wrap gap-2'>
				{values.length ? list : <p>No Ingredients entered yet.</p>}
			</div>
		</div>
	);
};

export default AddIngredientsList;
