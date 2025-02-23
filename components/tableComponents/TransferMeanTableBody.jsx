import EditButton from "../EditButton";
import DeleteButton from "../DeleteButton";

export default async function TransfermeanTableBody({ transferMeans }) {
	return (
		<tbody className="text-gray-600 text-sm font-light p-4">
			{transferMeans.map(transferMean => (
				<tr key={transferMean._id} className="border-b border-gray-200 hover:bg-gray-100">
					<td className="py-3 px-6 text-center">{transferMean._id}</td>
					<td className="py-3 px-6 text-center">{transferMean.name}</td>
					<td className="py-3 px-6 text-center">{transferMean.fullName}</td>
					<td className="py-3 px-6 text-center">
						<EditButton dataItemId={transferMean._id} dataItemType="transferMean" />
					</td>
					<td className="py-3 px-6 text-center">
						<DeleteButton data={transferMean} dataType="transferMean" />
					</td>
				</tr>
			))}
			<tr className="sticky bottom-0 bg-white border-b border-gray-200 hover:bg-gray-100">
				<td className="py-3 px-6 text-center">-</td>
				<td className="py-3 px-6 text-center">-</td>
				<td className="py-3 px-6 text-center">-</td>
				<td className="py-3 px-6 text-center"></td>
				<td className="py-3 px-6 text-center"></td>
			</tr>
		</tbody>
	);
}
