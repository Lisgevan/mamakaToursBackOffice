function Header({ pageName, children }) {
	return (
		<div>
			<header id="headerWrapper" className="z-20 sticky top-16 p-5 bg-gray-900 antialiased grow">
				<div className="flex flex-wrap">
					<button className=" border border-yellow-400 bg-yellow-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 pointer-events-none">
						{pageName}
					</button>
					{children}
				</div>
			</header>
		</div>
	);
}

export default Header;
