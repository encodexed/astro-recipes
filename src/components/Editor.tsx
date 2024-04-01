import { useState } from "react";

const Editor = () => {
	const [title, setTitle] = useState<string>("");
	const [body, setBody] = useState<string>("");

	const save = async () => {
		await fetch("/api/recipes", {
			method: "POST",
			body: JSON.stringify({ title, body }),
		});
	};

	return (
		<section className='flex justify-center'>
			<div className='my-4 p-4 w-1/3 border border-sky-300 flex flex-col gap-1 items-center'>
				<div className='flex gap-1 items-center'>
					<label htmlFor='title'>Title</label>
					<input
						className='p-2 bg-black text-white w-2/3'
						type='text'
						name='title'
						value={title}
						onChange={(e) => setTitle(e.target.value)}
					/>
				</div>

				<textarea
					className='p-2 bg-black text-white w-2/3'
					value={body}
					onChange={(e) => setBody(e.target.value)}
				/>
				<button
					className='p-2 border border-grey-300 hover:bg-green-300'
					onClick={save}
				>
					Save
				</button>
				{/* <button
					className='p-2 border border-grey-300 hover:bg-amber-300'
					onClick={get}
				>
					Get something
				</button>
				<button className='p-2 border border-grey-300 hover:bg-amber-300'>
					<a href='api/test.json'>Get JSON</a>
				</button> */}
			</div>
		</section>
	);
};

export default Editor;
