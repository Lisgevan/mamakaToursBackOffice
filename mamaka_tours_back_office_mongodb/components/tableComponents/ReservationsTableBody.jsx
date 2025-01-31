import connectToDatabase from "@/lib/mongodb";
import CheckBox from "../Checkbox";
import EditButton from "../EditButton";
import Reservations from "@/models/Reservations";
import formatDate from "@/lib/formatDate";

export default async function ReservationsTableBody() {
	await connectToDatabase();

	const reservationsData = await Reservations.find().lean();
	const reservations = JSON.parse(JSON.stringify(reservationsData));

	return (
		<tbody className="text-gray-600 text-sm font-light p-4">
			{reservations.map(reservation => (
				<tr key={reservation._id} className="border-b border-gray-200 hover:bg-gray-100">
					<td className="py-3 px-6 text-center">{reservation._id}</td>
					<td className="py-3 px-6 text-center">{reservation.reference}</td>
					<td className="py-3 px-6 text-center">{reservation.agent}</td>
					<td className="py-3 px-6 text-center">{reservation.accommodation}</td>
					<td className="py-3 px-6 text-center">{reservation.totalPax}</td>
					<td className="py-3 px-6 text-center">{reservation.totalCost}</td>
					<td className="py-3 px-6 text-center">{reservation.clientName}</td>
					<td className="py-3 px-6 text-center">{reservation.reservationType}</td>
					<td className="py-3 px-6 text-center text-nowrap">{formatDate(reservation.reservationDate)}</td>
					<td className="py-3 px-6 text-center">{reservation.reservationTime}</td>
					<td className="py-3 px-6 text-center">
						<CheckBox check={reservation.checkInOut} />
					</td>
					<td className="py-3 px-6 text-center">{reservation.details}</td>
					<td className="py-3 px-6 text-center">
						<EditButton />
					</td>
				</tr>
			))}
			<tr className="sticky bottom-0 bg-white border-b border-gray-200 hover:bg-gray-100">
				<td className="py-3 px-6 text-center">-</td>
				<td className="py-3 px-6 text-center">-</td>
				<td className="py-3 px-6 text-center">-</td>
				<td className="py-3 px-6 text-center">-</td>
				<td className="py-3 px-6 text-center">-</td>
				<td className="py-3 px-6 text-center">-</td>
				<td className="py-3 px-6 text-center">-</td>
				<td className="py-3 px-6 text-center">-</td>
				<td className="py-3 px-6 text-center">-</td>
				<td className="py-3 px-6 text-center">-</td>
				<td className="py-3 px-6 text-center">
					<CheckBox check={false} />
				</td>
				<td className="py-3 px-6 text-center">-</td>
				<td className="py-3 px-6 text-center">
					<EditButton />
				</td>
			</tr>
		</tbody>
	);
}
