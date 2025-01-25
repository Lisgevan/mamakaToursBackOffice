import CheckBox from "../Checkbox";
import EditButton from "../EditButton";

export default function ReservationsTableBody({ reservations }) {
	return (
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
				<td className="py-3 px-6 text-center text-nowrap">
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
	);
}
