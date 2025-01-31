"use client";

import { getAccommodations } from "@/app/actions/getAccommodations";
import { getAgents } from "@/app/actions/getAgents";
import { useEffect, useState } from "react";

export default function Select({ name, children, extraClasses = "", required = true }) {
	const [selections, setSelections] = useState([]);

	useEffect(() => {
		async function fetchSelections() {
			let data;
			if (name === "agent") {
				data = await getAgents();
			} else if (name === "accommodation") {
				data = await getAccommodations();
			}
			setSelections(data);
		}
		fetchSelections();
	}, []);

	return (
		<div>
			<label htmlFor={name}>{children}</label>
			<select name={name} id={name} className={`text-gray-900 ps-2 ${extraClasses}`} required>
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
