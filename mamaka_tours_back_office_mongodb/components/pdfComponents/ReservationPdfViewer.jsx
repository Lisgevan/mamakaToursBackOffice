"use client";
import { PDFDownloadLink, PDFViewer } from "@react-pdf/renderer";
import { useEffect } from "react";
import Button from "../Button";
import ReservationReportPdf from "./ReservationReportPdf";

export default function ReservationPdfViewer({ reservationsList, reportSearchParams }) {
	// Ensure reservationsList is an array
	const safeReservationsList = Array.isArray(reservationsList) ? reservationsList : [];

	useEffect(() => {
		console.log("reservationsList updated:", safeReservationsList);
		console.log("reportSearchParams updated:", reportSearchParams);
	}, [safeReservationsList, reportSearchParams]);

	let reportFilename;
	if (reportSearchParams?.agent) {
		reportFilename = `${reportSearchParams.agent}ReservationReport.pdf`;
	} else {
		reportFilename = `ReservationReport.pdf`;
	}

	return (
		<>
			<div className="z-20 sticky top-16 left-0 p-5 bg-gray-900 antialiased grow w-lvw flex justify-center">
				<Button
					type="button"
					onClick={() => window.close()}
					colorClasses={"text-red-500 border-red-500 hover:bg-red-500"}
				>
					Close PDF Tab
				</Button>
				<PDFDownloadLink
					document={
						<ReservationReportPdf reservationsList={reservationsList} reportSearchParams={reportSearchParams} />
					}
					fileName={reportFilename}
				>
					<button className="hover:text-white border font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 text-green-500 border-green-500 hover:bg-green-500">
						Download PDFs
					</button>
				</PDFDownloadLink>
			</div>
			<div className="bg-white w-screen h-screen">
				<PDFViewer width="100%" height="100%">
					<ReservationReportPdf reservationsList={reservationsList} reportSearchParams={reportSearchParams} />
				</PDFViewer>
			</div>
		</>
	);
}
