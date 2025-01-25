import { unstable_noStore as noStore } from "next/cache";

import Button from "@/components/Button";
import CheckBox from "@/components/Checkbox";
import EditButton from "@/components/EditButton";
import FromToAgentPicker from "@/components/FromToAgentPicker";
import Header from "@/components/Header";
import TableContainer from "@/components/TableContainer";

async function ReservationsPage({ searchParams }) {
	noStore();

	const reservations = [{}];

	return (
		<>
			<Header pageName="RESERVATION PAGE">
				<Button colorClasses="text-green-500 border-green-500 hover:bg-green-500">Add reservation</Button>
				<FromToAgentPicker primaryColor="teal" />
			</Header>

			<TableContainer>
				<thead className="z-10 sticky top-36">
					<tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
						<th className="py-3 px-6 text-center">ID</th>
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
						<th className="py-3 px-6 text-center">Arrival Invoice</th>
						<th className="py-3 px-6 text-center">EDIT</th>
					</tr>
				</thead>
				<tbody className="text-gray-600 text-sm font-light p-4">
					{/* {reservations.map(reservation => ( */}
					<tr key="{reservation.reservationId}" className="border-b border-gray-200 hover:bg-gray-100">
						<td className="py-3 px-6 text-center">reservation001</td>
						<td className="py-3 px-6 text-center">321654asd987</td>
						<td className="py-3 px-6 text-center">TUI</td>
						<td className="py-3 px-6 text-center">Plaza</td>
						<td className="py-3 px-6 text-center">4</td>
						<td className="py-3 px-6 text-center">56,00</td>
						<td className="py-3 px-6 text-center">Loco Poco</td>
						<td className="py-3 px-6 text-center">Arival</td>
						<td
							className="py-3 px-6 text-center text-nowrap
							
							"
						>
							{/* {reservation.reservationDate.split("-").reverse().join("-")} */}
							12-11-2025
						</td>
						<td className="py-3 px-6 text-center">12:30</td>
						<td className="py-3 px-6 text-center">
							<CheckBox check={true} />
						</td>
						<td className="py-3 px-6 text-center">
							<CheckBox check={true} />
						</td>
						<td className="py-3 px-6 text-center">
							<CheckBox check={false} />
						</td>
						<td className="py-3 px-6 text-center">
							<EditButton />
						</td>
					</tr>
					{/* ))} */}
				</tbody>
			</TableContainer>
		</>
	);
}

export default ReservationsPage;
