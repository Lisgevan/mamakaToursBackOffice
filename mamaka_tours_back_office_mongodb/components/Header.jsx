function Header({ pageName, children }) {
	return (
		<header id="headerWrapper" className="z-20 sticky top-16 left-0 p-5 bg-gray-900 antialiased grow">
			<div className="flex flex-wrap">
				<button className=" border border-yellow-400 bg-yellow-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center text-gray-800 me-2 mb-2 pointer-events-none">
					{pageName}
				</button>
				{children}
			</div>
		</header>
	);
}

export default Header;
