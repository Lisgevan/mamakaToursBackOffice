import connectToDatabase from "@/lib/mongodb";
import EditButton from "../EditButton";
import TransferMean from "@/models/TransferMean";
import DeleteButton from "../DeleteButton";

export default async function TransfermeanTableBody() {
	await connectToDatabase();

	const transferMeanData = await TransferMean.find().lean();
	const transferMeans = JSON.parse(JSON.stringify(transferMeanData));

	return (
		<tbody className="text-gray-600 text-sm font-light p-4">
			{transferMeans.map(transferMean => (
				<tr key={transferMean._id} className="border-b border-gray-200 hover:bg-gray-100">
					<td className="py-3 px-6 text-center">{transferMean._id}</td>
					<td className="py-3 px-6 text-center">{transferMean.name}</td>
					<td className="py-3 px-6 text-center">{transferMean.fullName}</td>
					<td className="py-3 px-6 text-center">
						<EditButton />
					</td>
					<td className="py-3 px-6 text-center">
						<DeleteButton />
					</td>
				</tr>
			))}
			<tr className="sticky bottom-0 bg-white border-b border-gray-200 hover:bg-gray-100">
				<td className="py-3 px-6 text-center">-</td>
				<td className="py-3 px-6 text-center">-</td>
				<td className="py-3 px-6 text-center">-</td>
				<td className="py-3 px-6 text-center">
					<EditButton />
				</td>
				<td className="py-3 px-6 text-center">
					<DeleteButton />
				</td>
			</tr>
		</tbody>
	);
}
