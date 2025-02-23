"use client";
import { transferReportPdfStyles as styles } from "@/components/pdfComponents/transferReportPdfStyles";
import formatDate from "@/lib/formatDate";
import { Table, TD, TH, TR } from "@ag-media/react-pdf-table";
import { Document, Font, Page, Text, View } from "@react-pdf/renderer";
// import { useEffect } from "react";

export default function TransferReportPdf({ transfersList, reportSearchParams }) {
	// useEffect(() => {
	// 	console.log("transfersList updated:", transfersList);
	// 	console.log("reportSearchParams updated:", reportSearchParams);
	// }, [transfersList, reportSearchParams]);

	let transfersHeadList = [];
	let title;
	let totalCost;
	let totalPaid;
	let totalNotPaid;
	const safeTransfersList = transfersList || [];

	if (reportSearchParams?.transferMean) {
		title = `${reportSearchParams.transferMean} Report: ${formatDate(reportSearchParams.dateFrom)} to ${formatDate(
			reportSearchParams.dateTo
		)}`;
		transfersHeadList = ["Transfer Type", "Agent", "Means", "Date", "Time", "From", "To", "Price", "Paid"];
		totalPaid = safeTransfersList.reduce((acc, transfer) => acc + (transfer.paid === true ? transfer.price : 0), 0);
		totalNotPaid = safeTransfersList.reduce((acc, transfer) => acc + (transfer.paid === false ? transfer.price : 0), 0);
		totalCost = safeTransfersList.reduce((acc, transfer) => acc + transfer.price, 0);
	} else if (reportSearchParams?.agent) {
		title = `${reportSearchParams.agent} - ${reportSearchParams.transferType} Report: ${formatDate(
			reportSearchParams.dateFrom
		)} to ${formatDate(reportSearchParams.dateTo)}`;
		transfersHeadList = ["Transfer Type", "Agent", "Means", "Date", "Time", "From", "To", "Price"];
		totalCost = safeTransfersList.reduce((acc, transfer) => acc + transfer.price, 0);
	} else {
		transfersHeadList = ["Transfer Type", "Agent", "Means", "Date", "Time", "From", "To", "Price"];
		totalCost = safeTransfersList.reduce((acc, transfer) => acc + transfer.price, 0);
		title = "Transfer Report";
	}

	Font.registerHyphenationCallback(word => ["", word, ""]);

	return (
		<Document>
			<Page size="A4" wrap orientation="landscape" style={styles.page}>
				<View style={styles.header} fixed>
					<Text>Mamaka Tours - Travel Agency</Text>
					<Text>{title}</Text>
				</View>
				<View style={styles.main}>
					<Table>
						<View fixed>
							<TH style={{ fontSize: 12 }}>
								{transfersHeadList.map((item, index) => (
									<TD key={index} style={styles.thTdStyle}>
										{item}
									</TD>
								))}
							</TH>
						</View>
						{transfersList.map((transfer, index) => (
							<TR key={transfer._id} style={index % 2 === 1 ? styles.trStyle : ""}>
								<TD style={styles.trTdStyle}>{transfer.transferType}</TD>
								<TD style={styles.trTdStyle}>
									<Text>{transfer.agent}</Text>
								</TD>
								<TD style={styles.trTdStyle}>{transfer?.transferMean}</TD>
								<TD style={styles.trTdStyle}>{formatDate(transfer.transferDate)}</TD>
								<TD style={styles.trTdStyle}>{transfer.transferTime}</TD>
								<TD style={styles.trTdStyle}>{transfer.locationFrom}</TD>
								<TD style={styles.trTdStyle}>{transfer.locationTo}</TD>
								<TD style={styles.trTdStyle}>{Number(transfer.price).toFixed(2)}</TD>
								{reportSearchParams.transferMean && <TD style={styles.trTdStyle}>{transfer.paid ? "PAID" : ""}</TD>}
							</TR>
						))}
						<TR>
							<TD style={styles.thTdStyle}>{totalPaid ? "Paid: " : ""}</TD>
							<TD style={styles.thTdStyle}>{totalPaid ? Number(totalPaid).toFixed(2) : ""}</TD>
							<TD style={styles.thTdStyle}></TD>
							<TD style={styles.thTdStyle}>{totalNotPaid ? "Not Paid: " : ""}</TD>
							<TD style={styles.thTdStyle}>{totalNotPaid ? Number(totalNotPaid).toFixed(2) : ""}</TD>
							<TD style={styles.thTdStyle}></TD>
							<TD style={[styles.thTdStyle, { justifyContent: "flex-end" }]}>Total Cost:</TD>
							<TD style={styles.thTdStyle}>{Number(totalCost).toFixed(2)}</TD>
							{reportSearchParams.transferMean && <TD style={styles.thTdStyle}></TD>}
						</TR>
					</Table>
				</View>
				<View style={styles.footer} fixed>
					<Text>Date of issue: {formatDate(new Date())}</Text>
				</View>
			</Page>
		</Document>
	);
}
