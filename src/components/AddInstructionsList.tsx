import { useEffect, useState } from "react";

const AddInstructionsList = ({
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
		updateFormField(values, false);
	}, [values]);

	return (
		<div className='flex flex-col'>
			<h3>Instructions</h3>
			<div className='flex flex-col gap-1'>
				{(() => {
					const arr = [];
					for (let i = 0; i < quantity; i++) {
						arr.push(
							<input
								key={`instruction${i}`}
								className='border border-gray-300'
								type='text'
								id={`instruction${i}`}
								// name={`instruction${i}`}
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

export default AddInstructionsList;
