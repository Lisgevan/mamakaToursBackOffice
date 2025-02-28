"use client";

import { useEffect, useState } from "react";
import { getAccommodations } from "@/app/actions/getActions/getAccommodations";
import { getAgents } from "@/app/actions/getActions/getAgents";
import { getLocations } from "@/app/actions/getActions/getLocations";
import { getReservations } from "@/app/actions/getActions/getReservations";
import { getTransferMean } from "@/app/actions/getActions/getTransferMean";

export default function Select({ name, children, extraClasses = "", required = true, onChange = () => {}, dataItem }) {
	const [selections, setSelections] = useState([]);

	const transferType = () => {
		const data = [
			{ _id: "1", name: "Land Transfer" },
			{ _id: "2", name: "Sea Transfer" },
		];
		return data;
	};

	let selectValue;
	if (name === "agent") {
		selectValue = dataItem?.agent || name;
	} else if (name === "accommodation") {
		selectValue = dataItem?.accommodation || name;
	} else if (name === "transferMean") {
		selectValue = dataItem?.transferMean || name;
	} else if (name === "transferType") {
		selectValue = dataItem?.transferType || name;
	} else if (name === "locationFrom") {
		selectValue = dataItem?.locationFrom || name;
	} else if (name === "locationTo") {
		selectValue = dataItem?.locationTo || name;
	}

	useEffect(() => {
		async function fetchSelections() {
			try {
				let data;
				if (name === "agent") {
					data = await getAgents();
				} else if (name === "accommodation") {
					data = await getAccommodations();
				} else if (name === "transferMean") {
					data = await getTransferMean();
				} else if (name === "reservations") {
					data = await getReservations();
				} else if (name === "locationFrom" || name === "locationTo") {
					data = await getLocations();
				} else if (name === "transferType") {
					data = transferType();
				} else {
					console.warn("Unknown select name:", name);
				}
				setSelections(data);
			} catch (error) {
				console.error("Error fetching selections:", error);
			}
		}
		fetchSelections();
	}, []);

	return (
		<div>
			<label htmlFor={name}>{children}</label>
			<select
				name={name}
				id={name}
				value={selectValue}
				className={`text-gray-900 ps-2 ${extraClasses}`}
				onChange={onChange}
				required={required}
			>
				<option value="">Select...</option>
				{selections.map(selection => (
					<option key={selection._id} value={selection.name}>
						{selection.name}
					</option>
				))}
			</select>
		</div>
	);
}
