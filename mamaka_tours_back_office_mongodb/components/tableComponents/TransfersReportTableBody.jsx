import connectToDatabase from "@/lib/mongodb";
import CheckBox from "../Checkbox";
import EditButton from "../EditButton";
import formatDate from "@/lib/formatDate";
import DeleteButton from "../DeleteButton";
import { getReportTransfers } from "@/app/actions/reportActions/getReportTransfers";

export default async function TransfersReportTableBody({ reportSearchParams }) {
	await connectToDatabase();

	let transfers;
	if (Object.keys(reportSearchParams).length) {
		const { agent, dateFrom, dateTo, transferMean, transferType, paid } = reportSearchParams;
		transfers = await getReportTransfers(agent, dateFrom, dateTo, transferMean, transferType, paid);
	} else {
		transfers = await getReportTransfers();
	}

	const totalPrice = transfers.reduce((acc, transfer) => acc + transfer.price, 0);

	return (
		<tbody className="text-gray-600 text-sm font-light p-4">
			{transfers.map(transfer => (
				<tr key={transfer._id} className="border-b border-gray-200 hover:bg-gray-100">
					{/* <td className="py-3 px-6 text-center">{transfer._id}</td> */}
					<td className="py-3 px-6 text-center">{transfer.transferType}</td>
					<td className="py-3 px-6 text-center">{transfer.agent}</td>
					<td className="py-3 px-6 text-center">{transfer.transferMean}</td>
					<td className="py-3 px-6 text-center text-nowrap">{formatDate(transfer.transferDate)}</td>
					<td className="py-3 px-6 text-center">{transfer.transferTime}</td>
					<td className="py-3 px-6 text-center">{transfer.locationFrom}</td>
					<td className="py-3 px-6 text-center">{transfer.locationTo}</td>
					<td className="py-3 px-6 text-center">{Number(transfer.price).toFixed(2)}</td>
					<td className="py-3 px-6 text-center">
						<CheckBox check={transfer.paid} />
					</td>
					<td className="py-3 px-6 text-center">{transfer.details}</td>
					<td className="py-3 px-6 text-center">
						<CheckBox check={transfer.noShow} />
					</td>
					<td className="py-3 px-6 text-center">
						<EditButton dataItemId={transfer._id} dataItemType="transfers" />
					</td>
					<td className="py-3 px-6 text-center">
						<DeleteButton data={transfer} dataType="transfers" />
					</td>
				</tr>
			))}
			<tr className="sticky bottom-0 bg-white border-b border-gray-200 hover:bg-gray-100">
				{/* <td className="py-3 px-6 text-center">-</td> */}
				<td className="py-3 px-6 text-center">-</td>
				<td className="py-3 px-6 text-center">-</td>
				<td className="py-3 px-6 text-center">-</td>
				<td className="py-3 px-6 text-center">-</td>
				<td className="py-3 px-6 text-center">-</td>
				<td className="py-3 px-6 text-center">-</td>
				<td className="py-3 px-6 text-center">-</td>
				<td className="py-3 px-6 text-center font-semibold">{Number(totalPrice).toFixed(2)}</td>
				<td className="py-3 px-6 text-center">-</td>
				<td className="py-3 px-6 text-center">-</td>
				<td className="py-3 px-6 text-center">-</td>
				<td className="py-3 px-6 text-center">-</td>
				<td className="py-3 px-6 text-center">-</td>
			</tr>
		</tbody>
	);
}
