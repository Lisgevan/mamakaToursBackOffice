"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { createContext, useContext, useEffect, useState } from "react";

// Create Context
const GlobalContext = createContext({
	showModal: false,
	setShowModal: () => {},
	dataType: "",
	setDataType: () => {},
	dataId: "",
	setDataId: () => {},
	reportReservationFilter: {},
	setReportReservationFilter: () => {},
	reportTransferFilter: {},
	setReportTransferFilter: () => {},
	pdfContent: {},
	setPdfContent: () => {},
});

// Create Provider
export function GlobalProvider({ children }) {
	const [showModal, setShowModal] = useState(false);
	const [dataType, setDataType] = useState("");
	const [dataId, setDataId] = useState("");
	const [pdfContent, setPdfContent] = useState("");
	const [reportReservationFilter, setReportReservationFilter] = useState({ agent: "", dateFrom: "", dateTo: "" });
	const [reportTransferFilter, setReportTransferFilter] = useState({
		transferType: "",
		agent: "",
		transferMean: "",
		dateFrom: "",
		dateTo: "",
		paid: false,
	});

	const router = useRouter();
	const searchParams = useSearchParams();

	useEffect(() => {
		const params = new URLSearchParams(searchParams);
		if (showModal) {
			params.set("editModal", "true");
		} else {
			params.delete("editModal");
		}
		router.push(`?${params.toString()}`);
		router.refresh(); // This forces the server component to update
	}, [showModal]);

	return (
		<GlobalContext.Provider
			value={{
				showModal,
				setShowModal,
				dataType,
				setDataType,
				dataId,
				setDataId,
				reportReservationFilter,
				setReportReservationFilter,
				reportTransferFilter,
				setReportTransferFilter,
				pdfContent,
				setPdfContent,
			}}
		>
			{children}
		</GlobalContext.Provider>
	);
}

// Custom Hook
export function useGlobalContext() {
	return useContext(GlobalContext);
}
