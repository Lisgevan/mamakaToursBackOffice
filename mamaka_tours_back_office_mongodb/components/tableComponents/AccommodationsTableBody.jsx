import EditButton from "../EditButton";
import DeleteButton from "../DeleteButton";

export default async function AccommodationsTableBody({ accommodations }) {
	return (
		<tbody className="text-gray-600 text-sm font-light p-4">
			{accommodations.map(accommodation => (
				<tr key={accommodation._id} className="border-b border-gray-200 hover:bg-gray-100">
					<td className="py-3 px-6 text-center">{accommodation._id}</td>
					<td className="py-3 px-6 text-center">{accommodation.name}</td>
					<td className="py-3 px-6 text-center">
						<EditButton dataItemId={accommodation._id} dataItemType="accommodations" />
					</td>
					<td className="py-3 px-6 text-center">
						<DeleteButton data={accommodation} dataType="accommodations" />
					</td>
				</tr>
			))}
			<tr className="sticky bottom-0 bg-white border-b border-gray-200 hover:bg-gray-100">
				<td className="py-3 px-6 text-center">-</td>
				<td className="py-3 px-6 text-center">-</td>
				<td className="py-3 px-6 text-center"></td>
				<td className="py-3 px-6 text-center"></td>
			</tr>
		</tbody>
	);
}
