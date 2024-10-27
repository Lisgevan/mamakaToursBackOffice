"use client";

import { useEffect, useState } from "react";

import Header from "@/components/header";

export default function MainBoardPage() {
	// const totalHeight = window.innerHeight;
	// const calculatedContentHeight = totalHeight - 165;

	const [contentHeight, setContentHeight] = useState(0);

	useEffect(() => {
		const totalHeight = window.innerHeight;
		const calculatedContentHeight = totalHeight - 165;
		setContentHeight(calculatedContentHeight);
	}, []);

	return (
		<>
			<Header pageName="Main Baord"></Header>
			<div id="content" className="w-screen bg-gray-400 flex justify-center" style={{ height: contentHeight }}>
				<h1 className="text-3xl self-center">
					SELECT "<span className="font-bold">RESERVATIONS</span>" OR "<span className="font-bold">TRANSFERS</span>"
					FROM THE BUTTONS AT THE TOP
				</h1>
			</div>
		</>
	);
}

