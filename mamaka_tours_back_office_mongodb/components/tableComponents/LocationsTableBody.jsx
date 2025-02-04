import connectToDatabase from "@/lib/mongodb";
import EditButton from "../EditButton";
import Locations from "@/models/Locations";

export default async function LocationsTableBody() {
	await connectToDatabase();

	const locationsData = await Locations.find().lean();
	const locations = JSON.parse(JSON.stringify(locationsData));

	return (
		<tbody className="text-gray-600 text-sm font-light p-4">
			{locations.map(location => (
				<tr key={location._id} className="border-b border-gray-200 hover:bg-gray-100">
					<td className="py-3 px-6 text-center">{location._id}</td>
					<td className="py-3 px-6 text-center">{location.name}</td>
					<td className="py-3 px-6 text-center">
						<EditButton />
					</td>
				</tr>
			))}
			<tr className="sticky bottom-0 bg-white border-b border-gray-200 hover:bg-gray-100">
				<td className="py-3 px-6 text-center">-</td>
				<td className="py-3 px-6 text-center">-</td>
				<td className="py-3 px-6 text-center">
					<EditButton />
				</td>
			</tr>
		</tbody>
	);
}
