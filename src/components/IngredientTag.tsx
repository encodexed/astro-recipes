import type { MouseEventHandler } from "react";

type Props = {
	name: string;
	index: number;
};

const IngredientTag = ({ name, index }: Props) => {
	return (
		<span className='flex text-sm gap-1 py-1 px-2 border border-green-400 rounded-xl bg-white hover:border-red-500 cursor-default'>
			{name}
			<img
				className='cursor-pointer'
				width='16'
				height='16'
				src='/cross.svg'
				alt='Remove ingredient'
			/>
		</span>
	);
};

export default IngredientTag;
