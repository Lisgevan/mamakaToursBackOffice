"use client"; // Mark this as a client component

import { Suspense, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation"; // Import useSearchParams
import ReservationPdfViewer from "@/components/pdfComponents/ReservationPdfViewer";
import { dataToObject } from "@/lib/dataToObject";
import GlobalLoading from "@/components/GlobalLoading";

export default function PdfPage() {
	const searchParams = useSearchParams(); // Use the useSearchParams hook
	const [reservations, setReservations] = useState([]); // Initialize as an empty array
	const [error, setError] = useState(null);

	useEffect(() => {
		const fetchData = async () => {
			try {
				// Convert searchParams to an object
				const params = dataToObject(searchParams);

				// Fetch data from your API endpoint
				const response = await fetch(`/api/reservations/pdfReport?${new URLSearchParams(params).toString()}`);
				if (!response.ok) {
					throw new Error("Failed to fetch data");
				}

				const data = await response.json();
				setReservations(data || []); // Ensure data is an array (fallback to empty array)
			} catch (err) {
				setError(err.message);
			}
		};

		fetchData();
	}, [searchParams]); // Re-fetch when searchParams change

	return (
		<Suspense fallback={<GlobalLoading />}>
			<ReservationPdfViewer reservationsList={reservations} reportSearchParams={dataToObject(searchParams)} />
		</Suspense>
	);
}
