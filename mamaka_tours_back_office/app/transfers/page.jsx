import CheckBox from "@/components/checkBox";
import EditButton from "@/components/editButton";
import TableContainer from "@/components/tableContainer";
import { getAllTransfers } from "@/db_services/transfersAPI";

async function ReservationsPage() {
	const { transfers, error } = await getAllTransfers();

	// transfers.map(transfer => console.log(transfer.transferTo.regionName));

	return (
		<>
			<h1 className="bg-white z-10 sticky top-12 px-4 py-3 ">TRANSFERS PAGE</h1>

			<TableContainer>
				<thead className="z-10 sticky top-24">
					<tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
						{/* <th className="py-3 px-6 text-center">ID</th> */}
						<th className="py-3 px-6 text-center">Transfer Type</th>
						<th className="py-3 px-6 text-center">Agent</th>
						<th className="py-3 px-6 text-center">Means</th>
						<th className="py-3 px-6 text-center">Date</th>
						<th className="py-3 px-6 text-center">Time</th>
						<th className="py-3 px-6 text-center">From</th>
						<th className="py-3 px-6 text-center">To</th>
						<th className="py-3 px-6 text-center">Price</th>
						<th className="py-3 px-6 text-center">Paid</th>
						<th className="py-3 px-6 text-center">Details</th>
						<th className="py-3 px-6 text-center">No Show</th>
						<th className="py-3 px-6 text-center">EDIT</th>
					</tr>
				</thead>
				<tbody className="text-gray-600 text-sm font-light p-4">
					{transfers.map(transfer => (
						<tr key={transfer.transferId} className="border-b border-gray-200 hover:bg-gray-100">
							{/* <td className="py-3 px-6 text-center">{transfer.transferId}</td> */}
							<td className="py-3 px-6 text-center">{transfer.transferType}</td>
							<td className="py-3 px-6 text-center">{transfer.agents.agentShortName}</td>
							<td className="py-3 px-6 text-center">{transfer.transferMeans.meansCompany}</td>
							<td className="py-3 px-6 text-center">{transfer.transferDate}</td>
							<td className="py-3 px-6 text-center">{transfer.transferTime}</td>
							<td className="py-3 px-6 text-center">{transfer.transferFrom.regionName}</td>
							<td className="py-3 px-6 text-center">{transfer.transferTo.regionName}</td>
							<td className="py-3 px-6 text-center">{transfer.transferPrice}</td>
							<td className="py-3 px-6 text-center">
								<CheckBox check={transfer.transferPaid} />
							</td>
							<td className="py-3 px-6 text-center">{transfer.transferDetails}</td>
							<td className="py-3 px-6 text-center">
								<CheckBox check={transfer.transferNoShow} />
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
