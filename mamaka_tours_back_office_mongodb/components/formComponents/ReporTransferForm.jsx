"use client";
import { redirect, useRouter } from "next/navigation";
import { useGlobalContext } from "@/context/GlobalContext";
import Select from "./Select";
import Button from "../Button";
import { useEffect } from "react";

export default function ReportTransferForm() {
	const { reportTransferFilter, setReportTransferFilter } = useGlobalContext();

	const router = useRouter();

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
		reportTransferFilter.paid ? (parameters.paid = reportTransferFilter.paid) : null;

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

	useEffect(() => {
		console.log("reportTransferFilter", reportTransferFilter);
	}, [reportTransferFilter]);

	return (
		<form onSubmit={hanndleSubmit} className="flex gap-4 justify-center items-center">
			<div className="flex flex-col gap-4">
				<div className="flex place-content-evenly gap-4">
					<Select name="transferType" onChange={handleChange} dataItem={reportTransferFilter} required={false}>
						Transfer Type:{" "}
					</Select>
					<Select name="agent" onChange={handleChange} dataItem={reportTransferFilter} required={false}>
						Transfer Agent:{" "}
					</Select>
					<Select name="transferMean" onChange={handleChange} dataItem={reportTransferFilter} required={false}>
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
