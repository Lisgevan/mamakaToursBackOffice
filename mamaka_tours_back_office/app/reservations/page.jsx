import Button from "@/components/button";
import CheckBox from "@/components/checkBox";
import EditButton from "@/components/editButton";
import Header from "@/components/header";
import TableContainer from "@/components/tableContainer";
import { getAllReservations } from "@/db_services/reservationsAPI";

async function ReservationsPage() {
	const { reservations, error } = await getAllReservations();

	return (
		<>
			<Header pageName="RESERVATION PAGE">
				<Button colorClasses="text-green-500 border-green-500 hover:bg-green-500">Add reservation</Button>
			</Header>

			<TableContainer>
				<thead className="z-10 sticky top-32">
					<tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
						{/* <th className="py-3 px-6 text-center">ID</th> */}
						<th className="py-3 px-6 text-center">Reference</th>
						<th className="py-3 px-6 text-center">Agent</th>
						<th className="py-3 px-6 text-center">Accommodation</th>
						<th className="py-3 px-6 text-center">Pax</th>
						<th className="py-3 px-6 text-center">Total Charge</th>
						<th className="py-3 px-6 text-center">Client's Name</th>
						<th className="py-3 px-6 text-center">Arrival</th>
						<th className="py-3 px-6 text-center">Departure</th>
						<th className="py-3 px-6 text-center">Checked In</th>
						<th className="py-3 px-6 text-center">Checked Out</th>
						<th className="py-3 px-6 text-center">Arrival Invoice</th>
						<th className="py-3 px-6 text-center">EDIT</th>
					</tr>
				</thead>
				<tbody className="text-gray-600 text-sm font-light p-4">
					{reservations.map(reservation => (
						<tr key={reservation.reservationId} className="border-b border-gray-200 hover:bg-gray-100">
							{/* <td className="py-3 px-6 text-center">{reservation.reservationId}</td> */}
							<td className="py-3 px-6 text-center">{reservation.reservationReference}</td>
							<td className="py-3 px-6 text-center">{reservation.agents.agentShortName}</td>
							<td className="py-3 px-6 text-center">{reservation.accommodations.accommodationName}</td>
							<td className="py-3 px-6 text-center">{reservation.reservationTotalPax}</td>
							<td className="py-3 px-6 text-center">{reservation.totalCharge}</td>
							<td className="py-3 px-6 text-center">{reservation.clientName}</td>
							<td className="py-3 px-6 text-center">{reservation.arrivalDate}</td>
							<td className="py-3 px-6 text-center">{reservation.departureDate}</td>
							<td className="py-3 px-6 text-center">
								<CheckBox check={reservation.checkIn} />
							</td>
							<td className="py-3 px-6 text-center">
								<CheckBox check={reservation.checkOut} />
							</td>
							<td className="py-3 px-6 text-center">
								<CheckBox check={reservation.arrivalInvoice} />
							</td>
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
