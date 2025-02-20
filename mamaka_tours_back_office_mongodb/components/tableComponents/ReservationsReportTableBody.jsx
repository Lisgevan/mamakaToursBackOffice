import CheckBox from "../Checkbox";
import EditButton from "../EditButton";
import formatDate from "@/lib/formatDate";
import DeleteButton from "../DeleteButton";
import { getReportReservations } from "@/app/actions/reportActions/getReportReservations";

export default async function ReservationsReportTableBody({ reportSearchParams }) {
	let reservations;
	if (Object.keys(reportSearchParams).length) {
		const { agent, dateFrom, dateTo } = reportSearchParams;
		reservations = await getReportReservations(agent, dateFrom, dateTo);
	} else {
		reservations = await getReportReservations();
	}

	const totalCost = reservations.reduce((acc, reservation) => acc + reservation.totalCost, 0);

	return (
		<tbody className="text-gray-600 text-sm font-light p-4">
			{reservations.map(reservation => (
				<tr key={reservation._id} className="border-b border-gray-200 hover:bg-gray-100">
					{/* <td className="py-3 px-6 text-center">{reservation._id}</td> */}
					<td className="py-3 px-6 text-center">{reservation.reference}</td>
					<td className="py-3 px-6 text-center">{reservation.agent}</td>
					<td className="py-3 px-6 text-center">{reservation.accommodation}</td>
					<td className="py-3 px-6 text-center">{reservation.totalPax}</td>
					<td className="py-3 px-6 text-center">{Number(reservation.totalCost).toFixed(2)}</td>
					<td className="py-3 px-6 text-center">{reservation.clientName}</td>
					<td className="py-3 px-6 text-center">{reservation.reservationType}</td>
					<td className="py-3 px-6 text-center text-nowrap">{formatDate(reservation.reservationDate)}</td>
					<td className="py-3 px-6 text-center">{reservation.reservationTime}</td>
					<td className="py-3 px-6 text-center">
						<CheckBox check={reservation.checkInOut} />
					</td>
					<td className="py-3 px-6 text-center">{reservation.details}</td>
					<td className="py-3 px-6 text-center">
						<EditButton dataItemId={reservation._id} dataItemType="reservations" />
					</td>
					<td className="py-3 px-6 text-center">
						<DeleteButton data={reservation} dataType="reservations" />
					</td>
				</tr>
			))}
			<tr className="sticky bottom-0 bg-white border-b border-gray-200 hover:bg-gray-100">
				{/* <td className="py-3 px-6 text-center">-</td> */}
				<td className="py-3 px-6 text-center">-</td>
				<td className="py-3 px-6 text-center">-</td>
				<td className="py-3 px-6 text-center">-</td>
				<td className="py-3 px-6 text-center font-semibold">Total: </td>
				<td className="py-3 px-6 text-center font-semibold">{Number(totalCost).toFixed(2)}</td>
				<td className="py-3 px-6 text-center">-</td>
				<td className="py-3 px-6 text-center">-</td>
				<td className="py-3 px-6 text-center">-</td>
				<td className="py-3 px-6 text-center">-</td>
				<td className="py-3 px-6 text-center">-</td>
				<td className="py-3 px-6 text-center">-</td>
				<td className="py-3 px-6 text-center">-</td>
				<td className="py-3 px-6 text-center">-</td>
			</tr>
		</tbody>
	);
}
