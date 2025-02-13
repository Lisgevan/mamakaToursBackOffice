import connectToDatabase from "@/lib/mongodb";
import CheckBox from "../Checkbox";
import EditButton from "../EditButton";
import formatDate from "@/lib/formatDate";
import DeleteButton from "../DeleteButton";
import { getTransfers } from "@/app/actions/getActions/getTransfers";

export default async function TransfersTableBody() {
	await connectToDatabase();

	const transfers = await getTransfers();

	return (
		<tbody className="text-gray-600 text-sm font-light p-4">
			{transfers.map(transfer => (
				<tr key={transfer._id} className="border-b border-gray-200 hover:bg-gray-100">
					<td className="py-3 px-6 text-center">{transfer._id}</td>
					<td className="py-3 px-6 text-center">{transfer.transferType}</td>
					<td className="py-3 px-6 text-center">{transfer.agent}</td>
					<td className="py-3 px-6 text-center">{transfer.transferMean}</td>
					<td className="py-3 px-6 text-center text-nowrap">{formatDate(transfer.transferDate)}</td>
					<td className="py-3 px-6 text-center">{transfer.transferTime}</td>
					<td className="py-3 px-6 text-center">{transfer.locationFrom}</td>
					<td className="py-3 px-6 text-center">{transfer.locationTo}</td>
					<td className="py-3 px-6 text-center">{transfer.price}</td>
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
				<td className="py-3 px-6 text-center">-</td>
				<td className="py-3 px-6 text-center">-</td>
				<td className="py-3 px-6 text-center">-</td>
				<td className="py-3 px-6 text-center">-</td>
				<td className="py-3 px-6 text-center">-</td>
				<td className="py-3 px-6 text-center">-</td>
				<td className="py-3 px-6 text-center">-</td>
				<td className="py-3 px-6 text-center">-</td>
				<td className="py-3 px-6 text-center font-semibold">totalPrice</td>
				<td className="py-3 px-6 text-center"></td>
				<td className="py-3 px-6 text-center">-</td>
				<td className="py-3 px-6 text-center"></td>
				<td className="py-3 px-6 text-center"></td>
				<td className="py-3 px-6 text-center"></td>
			</tr>
		</tbody>
	);
}
