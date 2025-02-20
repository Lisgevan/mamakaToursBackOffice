"use client";

// import { PDFDownloadLink } from "@react-pdf/renderer";
import Button from "../Button";
// import TransferReportPdf from "./TransferReportPdf";

export default function PdfButtons({ reportSearchParams }) {
	// console.log("reportSearchParams", reportSearchParams);
	// let reportFilename;
	// if (reportSearchParams?.agent) {
	// 	reportFilename = `${reportSearchParams.agent}TransferReport.pdf`;
	// } else if (reportSearchParams?.transferMean) {
	// 	reportFilename = `${reportSearchParams.trnasferMean}TransferReport.pdf`;
	// } else {
	// 	reportFilename = `TransferReport.pdf`;
	// }

	return (
		<>
			{/* <PDFDownloadLink document={<TransferReportPdf />} fileName={reportFilename}>
				<Button
					type="button"
					onClick={() => console.log("Downloading PDF...")}
					colorClasses={"text-green-500 border-green-500 hover:bg-green-500"}
				>
					Download PDF Report
				</Button>
			</PDFDownloadLink> */}
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
