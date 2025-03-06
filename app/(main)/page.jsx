"use client";

import { useEffect, useState } from "react";
import { useSession, signIn } from "next-auth/react";
import Header from "@/components/Header";
import GlobalLoading from "@/components/GlobalLoading";

export default function MainBoardPage() {
	const [contentHeight, setContentHeight] = useState(0);
	const { data: session, status } = useSession();

	useEffect(() => {
		const totalHeight = window.innerHeight;
		const calculatedContentHeight = totalHeight - 165;
		setContentHeight(calculatedContentHeight);
	}, []);

	if (status === "loading") {
		return <GlobalLoading />;
	}

	if (!session) {
		return (
			<div className="min-h-screen flex items-center justify-center flex-col">
				<h1 className="text-3xl font-bold mb-4">Please Log In</h1>
				<button
					onClick={() => signIn("google")}
					className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
					Sign in with Google
				</button>
			</div>
		);
	}

	return (
		<>
			<Header pageName="Main Board"></Header>
			<div id="content" className="w-screen bg-gray-400 flex justify-center" style={{ height: contentHeight }}>
				<h1 className="flex flex-col text-3xl self-center gap-10 p-4 text-center">
					<span>SELECT ONE OF</span>
					<span className="font-bold">"RESERVATIONS"</span>
					<span className="font-bold">"TRANSFERS"</span>
					<span className="font-bold">"MAINTENANCE"</span>
					<span>FROM THE BUTTONS AT THE TOP</span>
				</h1>
			</div>
		</>
	);
}
