"use client";
import { StyleSheet } from "@react-pdf/renderer";

export const transferReportPdfStyles = StyleSheet.create({
	page: {
		backgroundColor: "#E4E4E4",
		display: "flex",
		flexDirection: "column",
	},
	header: {
		backgroundColor: "#d2d2d2",
		fontSize: 12,
		maxHeight: 100,
		marginTop: 20,
		padding: 10,
		marginHorizontal: 20,
		marginBottom: 10,
		flexGrow: 1,
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-between",
	},
	footer: {
		backgroundColor: "#d2d2d2",
		fontSize: 12,
		maxHeight: 100,
		marginTop: 10,
		marginBottom: 20,
		padding: 10,
		marginHorizontal: 20,
		flexGrow: 1,
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-between",
	},
	main: {
		margin: 10,
		padding: 10,
		flexGrow: 50,
		fontSize: 12,
	},
	trStyle: {
		backgroundColor: "#d2d2d2",
	},
	trTdStyle: {
		justifyContent: "center",
		alignContent: "center",
		padding: 5,
	},
	thTdStyle: {
		justifyContent: "center",
		backgroundColor: "#5e5e5e",
		color: "#fff",
		fontSize: 12,
		padding: 5,
	},
	downloadButton: {
		paddingTop: "0.625rem",
		paddingBottom: "0.625rem",
		paddingLeft: "1.25rem",
		paddingRight: "1.25rem",
		marginBottom: "0.5rem",
		borderRadius: "0.5rem",
		borderWidth: "1px",
		borderColor: "#10B981",
		fontSize: "0.875rem",
		lineHeight: "1.25rem",
		fontWeight: 500,
		textAlign: "center",
		color: "#10B981",
		transition: "background-color 0.3s ease",
	},
});
