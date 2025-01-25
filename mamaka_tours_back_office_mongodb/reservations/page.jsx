import { unstable_noStore as noStore } from "next/cache";

import Button from "@/components/Button";
import CheckBox from "@/components/Checkbox";
import EditButton from "@/components/EditButton";
import FromToAgentPicker from "@/components/FromToAgentPicker";
import Header from "@/components/Header";
import TableContainer from "@/components/TableContainer";
import { getAllAgents } from "@/db_services/agentsAPI";
import { getAgentsReservations, getAllReservations } from "@/db_services/reservationsAPI";

async function ReservationsPage({ searchParams }) {
	noStore();
	let { reservations, error: reservationsError } = await getAllReservations();
	const { agents, error: agentsError } = await getAllAgents();

	if (Object.keys(searchParams).length) {
		const { agentId, startDate } = searchParams;
		// console.log("1a", agentId);
		const { agentsReservations, error } = await getAgentsReservations({ agentId, startDate });
		console.log("2", searchParams);
		console.log("3", agentsReservations);
		reservations = agentsReservations;
	}

	return (
		<>
			<Header pageName="RESERVATION PAGE">
				<Button colorClasses="text-green-500 border-green-500 hover:bg-green-500">Add reservation</Button>
				<FromToAgentPicker primaryColor="teal" agents={agents} />
			</Header>

			<TableContainer>
				<thead className="z-10 sticky top-36">
					<tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
						{/* <th className="py-3 px-6 text-center">ID</th> */}
						<th className="py-3 px-6 text-center">Reference</th>
						<th className="py-3 px-6 text-center">Agent</th>
						<th className="py-3 px-6 text-center">Accommodation</th>
						<th className="py-3 px-6 text-center">Pax</th>
						<th className="py-3 px-6 text-center">Total Charge</th>
						<th className="py-3 px-6 text-center">Client's Name</th>
						<th className="py-3 px-6 text-center">Reservation Type</th>
						<th className="py-3 px-6 text-center">Date</th>
						<th className="py-3 px-6 text-center">Time</th>
						<th className="py-3 px-6 text-center">Checked In</th>
						<th className="py-3 px-6 text-center">Checked Out</th>
						{/* <th className="py-3 px-6 text-center">Arrival Invoice</th> */}
						<th className="py-3 px-6 text-center">EDIT</th>
					</tr>
				</thead>
				<tbody className="text-gray-600 text-sm font-light p-4">
					{reservations.map(reservation => (
						<tr key={reservation.reservationId} className="border-b border-gray-200 hover:bg-gray-100">
							{/* <td className="py-3 px-6 text-center">{reservation.reservationId}</td> */}
							<td className="py-3 px-6 text-center">{reservation.reservationReference}</td>
							<td className="py-3 px-6 text-center">{reservation.agents.agentName}</td>
							<td className="py-3 px-6 text-center">{reservation.accommodations.accommodationName}</td>
							<td className="py-3 px-6 text-center">{reservation.reservationTotalPax}</td>
							<td className="py-3 px-6 text-center">{reservation.totalCharge}</td>
							<td className="py-3 px-6 text-center">{reservation.clientName}</td>
							<td className="py-3 px-6 text-center">{reservation.reservationType}</td>
							<td
								className="py-3 px-6 text-center text-nowrap
							
							"
							>
								{reservation.reservationDate.split("-").reverse().join("-")}
							</td>
							<td className="py-3 px-6 text-center">{reservation.reservationTime}</td>
							<td className="py-3 px-6 text-center">
								<CheckBox check={reservation.checkIn} />
							</td>
							<td className="py-3 px-6 text-center">
								<CheckBox check={reservation.checkOut} />
							</td>
							{/* <td className="py-3 px-6 text-center">
								<CheckBox check={reservation.arrivalInvoice} />
							</td> */}
							<td className="py-3 px-6 text-center">
								<EditButton />
							</td>
						</tr>
					))}
				</tbody>
			</TableContainer>
		</>
	);
}

export default ReservationsPage;
