import Link from "next/link";

export default function NavBar() {
	return (
		<nav
			id="mainHeader"
			className="z-10 sticky top-0 left-0 flex items-center justify-start gap-10 border-b border-stone-200 bg-yellow-400 px-4 py-3 uppercase sm:px-6 grow w-lvw"
		>
			<Link
				href={"/"}
				className={`text-yellow-400 hover:text-slate-800 border border-slate-700 bg-slate-700 hover:bg-yellow-500 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 `}
			>
				MAIN BOARD
			</Link>
			<Link
				href={"/reservations"}
				className={`text-yellow-400 hover:text-slate-800 border border-slate-700 bg-slate-700 hover:bg-yellow-500 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 `}
			>
				RESERVATIONS
			</Link>
			<Link
				href={"/transfers"}
				className={`text-yellow-400 hover:text-slate-800 border border-slate-700 bg-slate-700 hover:bg-yellow-500 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 `}
			>
				TRANSFERS
			</Link>
			<Link
				href={"/maintenance"}
				className={`text-yellow-400 hover:text-slate-800 border border-slate-700 bg-slate-700 hover:bg-yellow-500 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 `}
			>
				MAINTENANCE
			</Link>
		</nav>
	);
}
