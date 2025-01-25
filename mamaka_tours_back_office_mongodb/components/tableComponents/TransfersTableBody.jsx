import CheckBox from "../Checkbox";
import EditButton from "../EditButton";

export default function TransfersTableBody({ transfers }) {
	return (
		<tbody className="text-gray-600 text-sm font-light p-4">
			{/* {transfers.map(transfer => ( */}
			<tr key="{transfer.transferId}" className="border-b border-gray-200 hover:bg-gray-100">
				<td className="py-3 px-6 text-center">transfer.transferId</td>
				<td className="py-3 px-6 text-center">transfer.transferType</td>
				<td className="py-3 px-6 text-center">transfer.agents.agentShortName</td>
				<td className="py-3 px-6 text-center">transfer.transferMeans.meansCompany</td>
				<td className="py-3 px-6 text-center">transfer.transferDate</td>
				<td className="py-3 px-6 text-center">transfer.transferTime</td>
				<td className="py-3 px-6 text-center">transfer.transferFrom.regionName</td>
				<td className="py-3 px-6 text-center">transfer.transferTo.regionName</td>
				<td className="py-3 px-6 text-center">transfer.transferPrice</td>
				<td className="py-3 px-6 text-center">
					<CheckBox check={true} />
				</td>
				<td className="py-3 px-6 text-center">transfer.transferDetails</td>
				<td className="py-3 px-6 text-center">
					<CheckBox check={false} />
				</td>
				<td className="py-3 px-6 text-center">
					<EditButton />
				</td>
			</tr>
			{/* ))} */}
			<tr className="sticky bottom-0 bg-white border-b border-gray-200 hover:bg-gray-100">
				{/* <td className="py-3 px-6 text-center">-</td> */}
				<td className="py-3 px-6 text-center">-</td>
				<td className="py-3 px-6 text-center">-</td>
				<td className="py-3 px-6 text-center">-</td>
				<td className="py-3 px-6 text-center">-</td>
				<td className="py-3 px-6 text-center">-</td>
				<td className="py-3 px-6 text-center">-</td>
				<td className="py-3 px-6 text-center">-</td>
				{/* <td className="py-3 px-6 text-center font-semibold">{totalPrice}</td> */}
				<td className="py-3 px-6 text-center">
					<CheckBox check={false} />
				</td>
				<td className="py-3 px-6 text-center">{false}</td>
				<td className="py-3 px-6 text-center">
					<CheckBox check={false} />
				</td>
				<td className="py-3 px-6 text-center">
					<EditButton />
				</td>
			</tr>
		</tbody>
	);
}
