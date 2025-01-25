import Button from "@/components/Button";
import CheckBox from "@/components/Checkbox";
import EditButton from "@/components/EditButton";
import Header from "@/components/Header";
import TableContainer from "@/components/TableContainer";

async function ReservationsPage() {
	return (
		<>
			<Header pageName="TRANSFER PAGE">
				<Button colorClasses="text-green-500 border-green-500 hover:bg-green-500">Add transfer order</Button>
			</Header>

			<TableContainer>
				<thead className="z-10 sticky top-32">
					<tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
						<th className="py-3 px-6 text-center">ID</th>
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
			</TableContainer>
		</>
	);
}

export default ReservationsPage;
