import connectToDatabase from "@/lib/mongodb";
import EditButton from "../EditButton";
import Agents from "@/models/Agents";
import DeleteButton from "../DeleteButton";

export default async function AgentsTableBody() {
	await connectToDatabase();

	const agentsData = await Agents.find().lean();
	const agents = JSON.parse(JSON.stringify(agentsData));

	return (
		<tbody className="text-gray-600 text-sm font-light p-4">
			{agents.map(agent => (
				<tr key={agent._id} className="border-b border-gray-200 hover:bg-gray-100">
					<td className="py-3 px-6 text-center">{agent._id}</td>
					<td className="py-3 px-6 text-center">{agent.name}</td>
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
