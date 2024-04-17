import { useEffect, useState } from "react";

const AddIngredientsList = ({
	quantity,
	updateFormField,
}: {
	quantity: number;
	updateFormField: (value: string[], isIngredients: boolean) => void;
}) => {
	const [values, setValues] = useState<string[]>([]);

	const updateValues = (index: number, newValue: string) => {
		const newValues = [...values];
		newValues[index] = newValue;
		setValues(newValues);
	};

	useEffect(() => {
		updateFormField(values, true);
	}, [values]);

	return (
		<div className='flex flex-col'>
			<h3>Ingredients</h3>
			<div className='flex flex-col gap-1'>
				{(() => {
					const arr = [];
					for (let i = 0; i < quantity; i++) {
						arr.push(
							<input
								key={`ingredients${i}`}
								className='p-2 border border-gray-400'
								type='text'
								id={`ingredients${i}`}
								onBlur={(e) => {
									updateValues(i, e.target.value);
								}}
							/>
						);
					}
					return arr;
				})()}
			</div>
		</div>
	);
};

export default AddIngredientsList;
