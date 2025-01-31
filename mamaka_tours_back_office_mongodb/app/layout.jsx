import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "Mamaka Tours Back Office Application",
	description:
		"Mamaka Tours travel agency web application to keek track of incoming and outgoing customers and their transfers",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={`${inter.className} flex flex-col w-max`}>
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
				</nav>

				<main className="flex flex-col mx-auto h-max">{children}</main>
			</body>
		</html>
	);
}

