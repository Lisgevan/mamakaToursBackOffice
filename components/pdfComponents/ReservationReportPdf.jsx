"use client";
// import { reservationReportPdfStyles as styles } from "@/components/pdfComponents/reservationReportPdfStyles";
import formatDate from "@/lib/formatDate";
import { Table, TD, TH, TR } from "@ag-media/react-pdf-table";
import { Document, Font, Page, Text, View } from "@react-pdf/renderer";
import { reservationReportPdfStyles as styles } from "./reservationReportPdfStyles";
import { useEffect } from "react";
// reservationReportPdfStyles

export default function ReservationReportPdf({ reservationsList, reportSearchParams }) {
	useEffect(() => {
		console.log("reservationsList updated:", reservationsList);
		console.log("reportSearchParams updated:", reportSearchParams);
	}, [reservationsList, reportSearchParams]);

	let reservationsHeadList = [];
	let title;
	let totalCost;
	const safeReservationsList = reservationsList || [];

	//Reference	Agent	Accommodation	Pax	Total Charge	Client's Name	Reservation Type	Date

	if (reportSearchParams?.agent) {
		title = `${reportSearchParams.agent} - ${reportSearchParams.reservationType} Report: ${formatDate(
			reportSearchParams.dateFrom
		)} to ${formatDate(reportSearchParams.dateTo)}`;
	} else {
		title = "Reservation Report";
	}
	reservationsHeadList = [
		"Agent",
		"Reference",
		"Date",
		"Reservation Type",
		"Client's Name",
		"Pax",
		"Accommodation",
		"Price",
	];
	totalCost = safeReservationsList.reduce((acc, reservation) => acc + reservation.totalCost, 0);

	Font.registerHyphenationCallback(word => ["", word, ""]);

	return (
		<Document>
			<Page size="A4" wrap orientation="landscape" style={styles.page}>
				<View style={styles.header} fixed>
					<Text>Mamaka Tours - Travel Agency</Text>
					<Text>{title}</Text>
				</View>
				<View style={styles.main}>
					<View fixed>
						<TH style={{ fontSize: 12 }}>
							{reservationsHeadList.map((item, index) => (
								<TD key={index} style={styles.thTdStyle}>
									{item}
								</TD>
							))}
						</TH>
					</View>
					{safeReservationsList.map((reservation, index) => (
						<TR key={reservation._id} style={index % 2 === 1 ? styles.trStyle : ""}>
							<TD style={styles.trTdStyle}>{reservation.agent}</TD>
							<TD style={styles.trTdStyle}>{reservation?.reference}</TD>
							<TD style={styles.trTdStyle}>{formatDate(reservation.reservationDate)}</TD>
							<TD style={styles.trTdStyle}>{reservation.reservationType}</TD>
							<TD style={styles.trTdStyle}>{reservation.clientName}</TD>
							<TD style={styles.trTdStyle}>{reservation.totalPax}</TD>
							<TD style={styles.trTdStyle}>{reservation.accommodation}</TD>
							<TD style={styles.trTdStyle}>{Number(reservation.totalCost).toFixed(2)}</TD>
						</TR>
					))}
					<TR>
						<TD style={styles.thTdStyle}></TD>
						<TD style={styles.thTdStyle}></TD>
						<TD style={styles.thTdStyle}></TD>
						<TD style={styles.thTdStyle}></TD>
						<TD style={styles.thTdStyle}></TD>
						<TD style={styles.thTdStyle}></TD>
						<TD style={[styles.thTdStyle, { justifyContent: "flex-end" }]}>Total Cost:</TD>
						<TD style={styles.thTdStyle}>{Number(totalCost).toFixed(2)}</TD>
					</TR>
				</View>
				<View style={styles.footer} fixed>
					<Text>Date of issue: {formatDate(new Date())}</Text>
				</View>
			</Page>
		</Document>
	);
}
