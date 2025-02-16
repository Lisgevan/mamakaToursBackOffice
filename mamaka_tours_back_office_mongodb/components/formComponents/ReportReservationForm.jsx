"use client";
import { redirect, useRouter } from "next/navigation";
import { useGlobalContext } from "@/context/GlobalContext";
import Select from "./Select";
import Button from "../Button";

export default function ReportReservationForm() {
	const { reportReservationFilter, setReportReservationFilter } = useGlobalContext();

	const router = useRouter();

	const handleChange = e => {
		const { name, value } = e.target;
		setReportReservationFilter(prev => ({
			...prev,
			[name]: value,
		}));
	};

	const hanndleSubmit = e => {
		e.preventDefault();
		// Create search params
		const searchParams = new URLSearchParams({
			agent: reportReservationFilter.agent || "",
			dateFrom: reportReservationFilter.dateFrom || "",
			dateTo: reportReservationFilter.dateTo || "",
		});

		// Update URL with search parameters
		router.push(`?${searchParams.toString()}`);

		console.log(reportReservationFilter.agent, reportReservationFilter.dateFrom, reportReservationFilter.dateTo);
	};

	const handleReset = () => {
		setReportReservationFilter({ agent: "", dateFrom: "", dateTo: "" });
		redirect("/reservations/reports");
	};

	return (
		<form onSubmit={hanndleSubmit} className="flex gap-4 justify-center items-center">
			<Select name="agent" dataType="agents" dataItem={reportReservationFilter} onChange={handleChange} required={true}>
				Agent:{" "}
			</Select>
			<div>
				<label htmlFor="dateFrom">Date From: </label>
				<input
					type="date"
					id="dateFrom"
					name="dateFrom"
					value={reportReservationFilter.dateFrom}
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
					value={reportReservationFilter.dateTo}
					onChange={handleChange}
					className="text-gray-900 text-center"
					required
				/>
			</div>
			<div className="flex flex-col justify-center">
				<Button type="submit" colorClasses="text-green-700 border-green-700 hover:bg-green-500 w-full text-2xl">
					Get Reservations
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
