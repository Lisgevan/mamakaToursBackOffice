"use client"; // Mark this as a client component

import { Suspense, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation"; // Import useSearchParams
import { dataToObject } from "@/lib/dataToObject";
import TransferPdfViewer from "@/components/pdfComponents/TransferPdfViewer";
import GlobalLoading from "@/components/GlobalLoading";

export default function PdfPage() {
	const searchParams = useSearchParams(); // Use the useSearchParams hook
	const [transfers, setTransfers] = useState([]); // Initialize as an empty array
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		const fetchData = async () => {
			try {
				// Convert searchParams to an object
				const params = dataToObject(searchParams);

				// Fetch data from your API endpoint
				const response = await fetch(`/api/transfers/pdfReport?${new URLSearchParams(params).toString()}`);
				if (!response.ok) {
					throw new Error("Failed to fetch data");
				}

				const data = await response.json();
				setTransfers(data || []); // Ensure data is an array (fallback to empty array)
			} catch (err) {
				setError(err.message);
			} finally {
				setLoading(false);
			}
		};

		fetchData();
	}, [searchParams]); // Re-fetch when searchParams change

	if (loading) {
		return <div>Loading...</div>;
	}

	if (error) {
		return <div>Error: {error}</div>;
	}

	return (
		<Suspense fallback={<GlobalLoading />}>
			<TransferPdfViewer transfersList={transfers} reportSearchParams={dataToObject(searchParams)} />
		</Suspense>
	);
}
