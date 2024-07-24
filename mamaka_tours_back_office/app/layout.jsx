import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "Mamaka Tours Back Office Application",
	description:
		"Mamaka Tours travel agency web application to keek track of incomeing and outgoing customers and their transfers",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={inter.className}>
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
			</body>
		</html>
	);
}

