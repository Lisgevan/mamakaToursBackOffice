import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import { GlobalProvider } from "@/context/GlobalContext";
import { Suspense } from "react";
import GlobalLoading from "@/components/GlobalLoading";

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
				<Suspense fallback={<GlobalLoading />}>
					<GlobalProvider>
						<NavBar />

						<main className="flex flex-col mx-auto h-max">{children}</main>
					</GlobalProvider>
				</Suspense>
			</body>
		</html>
	);
}
