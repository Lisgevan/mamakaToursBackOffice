"use client";

import { useEffect } from "react";
import { redirect, useRouter } from "next/navigation";
import { useGlobalContext } from "@/context/GlobalContext";
import Select from "./Select";
import Button from "../Button";

export default function ReportTransferForm() {
	const { reportTransferFilter, setReportTransferFilter } = useGlobalContext();

	const router = useRouter();

	useEffect(() => {
		setReportTransferFilter({ transferType: "", agent: "", transferMean: "", dateFrom: "", dateTo: "", paid: false });
	}, []);

	const handleChange = e => {
		const { name, value, type } = e.target;
		if (type === "checkbox") {
			setReportTransferFilter(prev => {
				return { ...prev, [name]: !prev[name] };
			});
		} else {
			setReportTransferFilter(prev => ({
				...prev,
				[name]: value,
			}));
		}
	};

	const hanndleSubmit = e => {
		e.preventDefault();
		const parameters = {};
		reportTransferFilter.transferType ? (parameters.transferType = reportTransferFilter.transferType) : null;
		reportTransferFilter.agent ? (parameters.agent = reportTransferFilter.agent) : null;
		reportTransferFilter.transferMean ? (parameters.transferMean = reportTransferFilter.transferMean) : null;
		reportTransferFilter.dateFrom ? (parameters.dateFrom = reportTransferFilter.dateFrom) : null;
		reportTransferFilter.dateTo ? (parameters.dateTo = reportTransferFilter.dateTo) : null;
		//if agent is selected, paid is set to null ==> get all transfers of agent **DONE**
		if (reportTransferFilter.agent) {
			parameters.paid = null;
		}
		if (reportTransferFilter.transferMean) {
			reportTransferFilter.paid
				? //if transferMean is selected and paid is checked, paid is set to null ==> get all transfers of transferMean and get totalPaid and totalNotPaid
				  null
				: //if transferMean is selected and paid is not checked, paid is set to false ==> get all transfers of transferMean to be paid
				  (parameters.paid = false);
		}

		// Create search params
		const searchParams = new URLSearchParams(parameters);

		if (
			(parameters.agent && parameters.dateFrom && parameters.dateTo && parameters.transferType) ||
			(parameters.dateFrom && parameters.dateTo && parameters.transferMean && parameters.paid) ||
			(parameters.dateFrom && parameters.dateTo && parameters.transferMean)
		) {
			// Update URL with search parameters
			router.push(`?${searchParams.toString()}`);
		} else {
			alert(
				"Please select one of the following combinations: \n 1) Agent, Date From, Date To and Transfer Type \n 2) Date From, Date To and Transfer Mean \n 3) Date From, Date To, Transfer Mean and Paid"
			);
		}
	};

	const handleReset = () => {
		setReportTransferFilter({ transferType: "", agent: "", transferMean: "", dateFrom: "", dateTo: "", paid: false });
		redirect("/transfers/reports");
	};

	return (
		<form onSubmit={hanndleSubmit} className="flex gap-4 justify-center items-center">
			<div className="flex flex-col gap-4">
				<div className="flex place-content-evenly gap-4">
					<Select
						name="agent"
						dataType="agents"
						onChange={handleChange}
						dataItem={reportTransferFilter}
						required={false}
					>
						Transfer Agent:{" "}
					</Select>
					<Select
						name="transferType"
						dataType="transferType"
						onChange={handleChange}
						dataItem={reportTransferFilter}
						required={false}
					>
						Transfer Type:{" "}
					</Select>
					<Select
						name="transferMean"
						dataType="transferMean"
						onChange={handleChange}
						dataItem={reportTransferFilter}
						required={false}
					>
						Transfer Mean:{" "}
					</Select>
				</div>
				<div className="flex place-content-evenly">
					<div>
						<label htmlFor="dateFrom">Date From: </label>
						<input
							type="date"
							id="dateFrom"
							name="dateFrom"
							value={reportTransferFilter.dateFrom}
							onChange={handleChange}
							className="text-gray-900 text-center"
							required
						/>
					</div>
					<div>
						<label htmlFor="dateTo">Date To: </label>
						<input
							type="date"
							id="dateTo"
							name="dateTo"
							value={reportTransferFilter.dateTo}
							onChange={handleChange}
							className="text-gray-900 text-center"
							required
						/>
					</div>
					<label className="flex items-center gap-2">
						<input
							type="checkbox"
							name="paid"
							checked={reportTransferFilter.paid}
							onChange={handleChange}
							className="w-4 h-4"
						/>
						Paid
					</label>
				</div>
			</div>
			<div className="flex flex-col justify-center">
				<Button type="submit" colorClasses="text-green-700 border-green-700 hover:bg-green-500 w-full text-2xl">
					Get Transfers
				</Button>
				<Button
					type="button"
					onClick={handleReset}
					colorClasses="text-yellow-700 border-yellow-700 hover:bg-yellow-500 w-full text-2xl"
				>
					Reset
				</Button>
			</div>
		</form>
	);
}
