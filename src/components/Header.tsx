const Header = () => {
	const popUp = () => {
		console.log("Clicked");
	};

	return (
		<header>
			<nav className='flex justify-between items-center bg-sky-100 h-10 p-2 w-full fixed'>
				<div className='flex gap-1 items-center'>
					<img src='/favicon.svg' width='30' height='30' alt='recipes icon' />
					<h3 className='font-bold text-lg text-sky-700'>Rob's Recipes</h3>
				</div>
				<div>
					<ul className='flex gap-4'>
						<li className='text-sm font-bold hover:underline hover:text-sky-700'>
							<a href=''>Recipes</a>
						</li>
						<li className='text-sm font-bold hover:underline hover:text-sky-700'>
							<a href=''>Add New</a>
						</li>
						<li className='text-sm font-bold hover:underline hover:text-sky-700'>
							<a href=''>About</a>
						</li>
						<button
							className='p-2 bg-slate-300 hover:bg-slate-400'
							onClick={popUp}
						>
							Click me
						</button>
					</ul>
				</div>
			</nav>
			<div id='header-spacer' className='h-10' />
		</header>
	);
};

export default Header;
