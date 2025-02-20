"use client";
import { reservationReportPdfStyles as styles } from "@/components/pdfComponents/reservationReportPdfStyles";
import formatDate from "@/lib/formatDate";
import { Table, TD, TH, TR } from "@ag-media/react-pdf-table";
import { Document, Font, Page, Text, View } from "@react-pdf/renderer";
import { useEffect } from "react";

export default function ReservationReportPdf({ reservationsList, reportSearchParams }) {
	useEffect(() => {
		console.log("reservationsList updated:", reservationsList);
		console.log("reportSearchParams updated:", reportSearchParams);
	}, [reservationsList, reportSearchParams]);

	let reservationsHeadList = [];
	let title;
	let totalCost;
	let totalPaid;
	let totalNotPaid;
	const safeReservationsList = reservationsList || [];

	if (reportSearchParams?.reservationMean) {
		title = `${reportSearchParams.reservationMean} Report: ${formatDate(reportSearchParams.dateFrom)} to ${formatDate(
			reportSearchParams.dateTo
		)}`;
		reservationsHeadList = ["Reservation Type", "Agent", "Means", "Date", "Time", "From", "To", "Price", "Paid"];
		totalPaid = safeReservationsList.reduce(
			(acc, reservation) => acc + (reservation.paid === true ? reservation.price : 0),
			0
		);
		totalNotPaid = safeReservationsList.reduce(
			(acc, reservation) => acc + (reservation.paid === false ? reservation.price : 0),
			0
		);
		totalCost = safeReservationsList.reduce((acc, reservation) => acc + reservation.price, 0);
	} else if (reportSearchParams?.agent) {
		title = `${reportSearchParams.agent} - ${reportSearchParams.reservationType} Report: ${formatDate(
			reportSearchParams.dateFrom
		)} to ${formatDate(reportSearchParams.dateTo)}`;
		reservationsHeadList = ["Reservation Type", "Agent", "Means", "Date", "Time", "From", "To", "Price"];
		totalCost = safeReservationsList.reduce((acc, reservation) => acc + reservation.price, 0);
	} else {
		reservationsHeadList = ["Reservation Type", "Agent", "Means", "Date", "Time", "From", "To", "Price"];
		totalCost = safeReservationsList.reduce((acc, reservation) => acc + reservation.price, 0);
		title = "Reservation Report";
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
								{reservationsHeadList.map((item, index) => (
									<TD key={index} style={styles.thTdStyle}>
										{item}
									</TD>
								))}
							</TH>
						</View>
						{safeReservationsList.map((reservation, index) => (
							<TR key={reservation._id} style={index % 2 === 1 ? styles.trStyle : ""}>
								<TD style={styles.trTdStyle}>{reservation.reservationType}</TD>
								<TD style={styles.trTdStyle}>
									<Text>{reservation.agent}</Text>
								</TD>
								<TD style={styles.trTdStyle}>{reservation?.reservationMean}</TD>
								<TD style={styles.trTdStyle}>{formatDate(reservation.reservationDate)}</TD>
								<TD style={styles.trTdStyle}>{reservation.reservationTime}</TD>
								<TD style={styles.trTdStyle}>{reservation.locationFrom}</TD>
								<TD style={styles.trTdStyle}>{reservation.locationTo}</TD>
								<TD style={styles.trTdStyle}>{Number(reservation.price).toFixed(2)}</TD>
								{reportSearchParams.reservationMean && (
									<TD style={styles.trTdStyle}>{reservation.paid ? "PAID" : ""}</TD>
								)}
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
							{reportSearchParams.reservationMean && <TD style={styles.thTdStyle}></TD>}
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
