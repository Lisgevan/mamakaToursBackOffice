"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import Button from "./button";
import DatePicker from "./datePicker";
// import agentsReservations from "@/app/api/agentsReservations";

export let dateAgentData;

function FromToAgentPicker({ primaryColor, agents }) {
	const [show, setShow] = useState(false);
	const [selectedAgent, setSelectedAgent] = useState("0");
	const router = useRouter();

	function handletoggle() {
		setShow(show => !show);
	}

	function handleSelectedValue(e) {
		e.preventDefault();
		setSelectedAgent(e.target.value);
	}

	async function handleDateAgentSubmit(e) {
		e.preventDefault();
		const keys = ["startDate", "endDate"];
		const values = e.target[0].value.split(" ~ ");
		const formDates = keys.reduce((acc, key, index) => {
			acc[key] = values[index];
			// .split( "-" ).reverse().join( "-" ); // to save date as DD/MM/YYY
			return acc;
		}, {});
		console.log(formDates);

		router.push(`/reservations?agentId=${selectedAgent}&startDate=${formDates.startDate}&endDate=${formDates.endDate}`);

		setShow(show => !show);
	}

	return (
		<>
			<Button
				colorClasses={`text-${primaryColor}-500 border-${primaryColor}-500 hover:bg-${primaryColor}-500`}
				onClick={handletoggle}
				type="button"
			>
				Agent's Reservations
			</Button>
			{show && (
				<form className="flex gap-2" onSubmit={handleDateAgentSubmit}>
					<DatePicker primaryColor={primaryColor} />
					<select
						name="agent"
						id="agent"
						vlalue={selectedAgent}
						onChange={handleSelectedValue}
						className={`border border-${primaryColor}-500 bg-${primaryColor}-500 font-medium rounded-lg text-sm px-5 py-2.5 text-left me-2 mb-2`}
					>
						<option value="0">Select Agent</option>
						{agents.map(agent => (
							<option key={agent.agentId} value={agent.agentId}>
								{agent.agentShortName}
							</option>
						))}
					</select>
					<Button
						colorClasses={`text-${primaryColor}-500 border-${primaryColor}-500 hover:bg-${primaryColor}-500`}
						type="submit"
					>
						Submit
					</Button>
				</form>
			)}
		</>
	);
}

export default FromToAgentPicker;
