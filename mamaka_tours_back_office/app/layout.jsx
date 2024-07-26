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
			<body className={`${inter.className} flex m-2`}>
				<div className="grid grid-rows-[auto_auto]">
					<header className="z-10 sticky top-0 flex items-center justify-evenly border-b border-stone-200 bg-yellow-400 px-4 py-3 uppercase sm:px-6">
						<p>
							<Link href={"./"}>MAIN BOARD</Link>
						</p>
						<p>
							<Link href={"./reservations"}>RESERVATIONS</Link>
						</p>
						<p>
							<Link href={"./transfers"}>TRANSFERS</Link>
						</p>
					</header>

					<div>
						<main className="mx-auto">{children}</main>
					</div>
				</div>

				{/* <main className="flex flex-col items-center">
					<p>
						<Link href={"./"}>MAIN BOARD</Link>
					</p>
					<p>
						<Link href={"./reservations"}>RESERVATIONS</Link>
					</p>
					<p>
						<Link href={"./transfers"}>TRANSFERS</Link>
					</p>
					{children}
				</main> */}
			</body>
		</html>
	);
}

