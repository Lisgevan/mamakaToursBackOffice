import connectToDatabase from "@/lib/mongodb";
import EditButton from "../EditButton";
import Accommodations from "@/models/Accommodations";
import DeleteButton from "../DeleteButton";

export default async function AccommodationsTableBody() {
	await connectToDatabase();

	const accommodationsData = await Accommodations.find().lean();
	const accommodations = JSON.parse(JSON.stringify(accommodationsData));

	return (
		<tbody className="text-gray-600 text-sm font-light p-4">
			{accommodations.map(accommodation => (
				<tr key={accommodation._id} className="border-b border-gray-200 hover:bg-gray-100">
					<td className="py-3 px-6 text-center">{accommodation._id}</td>
					<td className="py-3 px-6 text-center">{accommodation.name}</td>
					<td className="py-3 px-6 text-center">
						<EditButton />
					</td>
					<td className="py-3 px-6 text-center">
						<DeleteButton data={accommodation} dataType="accommodations" />
					</td>
				</tr>
			))}
			<tr className="sticky bottom-0 bg-white border-b border-gray-200 hover:bg-gray-100">
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
