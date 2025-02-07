"use client";

import { useEffect, useState } from "react";

import Header from "@/components/Header";

export default function MainBoardPage() {
	const [contentHeight, setContentHeight] = useState(0);

	useEffect(() => {
		const totalHeight = window.innerHeight;
		const calculatedContentHeight = totalHeight - 165;
		setContentHeight(calculatedContentHeight);
	}, []);

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
