import { useState } from "react";

const SearchBar = () => {
	const [searchTerm, setSearchTerm] = useState<string>("");

	return (
		<>
			<form
				className='flex gap-1 items-center relative rounded'
				action={`/search`}
			>
				<label htmlFor='search' className='absolute pl-1'>
					<img src='/search.svg' alt='Search icon' width='20' height='20' />
				</label>
				<input
					type='text'
					id='search'
					name='searchTerm'
					value={searchTerm}
					className='max-w-48 rounded py-1 pl-7 pr-8 border focus:outline-none focus:border-sky-700 focus:border-2'
					placeholder='Search'
					onChange={(e) => {
						setSearchTerm(e.target.value);
					}}
				/>
				{searchTerm.length > 0 && (
					<button className='absolute right-0 h-full overflow-hidden ml-1 rounded p-1 max-w-8'>
						<img
							src='/right-arrow.svg'
							alt='Search submit button'
							width='30'
							height='30'
							className='px-1 bg-sky-700 h-full rounded'
						/>
					</button>
				)}
			</form>
		</>
	);
};

export default SearchBar;
