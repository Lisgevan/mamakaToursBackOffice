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
});

// Create Provider
export function GlobalProvider({ children }) {
	const [showModal, setShowModal] = useState(false);
	const [dataType, setDataType] = useState("");
	const [dataId, setDataId] = useState("");

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
		<GlobalContext.Provider value={{ showModal, setShowModal, dataType, setDataType, dataId, setDataId }}>
			{children}
		</GlobalContext.Provider>
	);
}

// Custom Hook
export function useGlobalContext() {
	return useContext(GlobalContext);
}
