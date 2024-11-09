"use client";

import Header from "@/components/header";

export default function MainBoardPage() {
	const totalHeight = window.innerHeight;
	const calculatedContentHeight = totalHeight - 165;

	return (
		<>
			<Header pageName="Main Baord"></Header>
			<div
				id="content"
				className="w-screen bg-gray-400 flex justify-center"
				style={{ height: calculatedContentHeight }}
			>
				<h1 className="text-3xl self-center">
					SELECT "<span className="font-bold">RESERVATIONS</span>" OR "<span className="font-bold">TRANSFERS</span>"
					FROM THE BUTTONS AT THE TOP
				</h1>
			</div>
		</>
	);
}

