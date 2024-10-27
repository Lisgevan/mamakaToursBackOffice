"use client";

import { useEffect, useState } from "react";

function TableContainer({ children }) {
	// const totalHeight = window.innerHeight;
	// const calculatedContentHeight = totalHeight - 165;

	const [contentHeight, setContentHeight] = useState(0);

	useEffect(() => {
		const totalHeight = window.innerHeight;
		const calculatedContentHeight = totalHeight - 165;
		setContentHeight(calculatedContentHeight);
	}, []);

	return (
		<div style={{ minHeight: contentHeight }}>
			<div className="min-w-screen min-h-max flex justify-center bg-gray-100 font-sans">
				<div className="min-w-max lg:w-5/6">
					<div className="bg-white shadow-md rounded">
						<table className="w-screen table-auto">{children}</table>
					</div>
				</div>
			</div>
		</div>
	);
}

export default TableContainer;
