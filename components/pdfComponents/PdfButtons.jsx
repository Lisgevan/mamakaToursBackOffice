"use client";

import Button from "../Button";

export default function PdfButtons({ reportSearchParams }) {
	return (
		<>
			<Button
				type="button"
				onClick={() => window.close()}
				colorClasses={"text-red-500 border-red-500 hover:bg-red-500"}
			>
				Close PDF Tab
			</Button>
		</>
	);
}
