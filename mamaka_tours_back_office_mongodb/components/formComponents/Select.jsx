"use client";

import { getAccommodations } from "@/app/actions/getAccommodations";
import { getAgents } from "@/app/actions/getAgents";
import { getLocations } from "@/app/actions/getLocations";
import { getReservations } from "@/app/actions/getReservations";
import { getTransferMean } from "@/app/actions/getTransfermean";
import { useEffect, useState } from "react";

export default function Select({ name, children, extraClasses = "", required = true, onChange = () => {} }) {
	const [selections, setSelections] = useState([]);

	const transferType = [
		{ _id: 1, name: "Land Transfer" },
		{ _id: 2, name: "Sea Transfer" },
	];

	useEffect(() => {
		async function fetchSelections() {
			let data;
			if (name === "agent") {
				data = await getAgents();
			} else if (name === "accommodation") {
				data = await getAccommodations();
			} else if (name === "transferType") {
				data = transferType;
			} else if (name === "transferMean") {
				data = await getTransferMean();
			} else if (name === "rservations") {
				data = await getReservations();
			} else if (name === "locationFrom" || name === "locationTo") {
				data = await getLocations();
			}
			setSelections(data);
		}
		fetchSelections();
	}, []);

	return (
		<div>
			<label htmlFor={name}>{children}</label>
			<select name={name} id={name} className={`text-gray-900 ps-2 ${extraClasses}`} onChange={onChange} required>
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
