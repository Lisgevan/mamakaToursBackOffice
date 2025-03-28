import EditButton from "../EditButton";
import DeleteButton from "../DeleteButton";

export default async function AgentsTableBody({ agents }) {
	return (
		<tbody className="text-gray-600 text-sm font-light p-4">
			{agents.map(agent => (
				<tr key={agent._id} className="border-b border-gray-200 hover:bg-gray-100">
					<td className="py-3 px-6 text-center">{agent._id}</td>
					<td className="py-3 px-6 text-center">{agent.name}</td>
					<td className="py-3 px-6 text-center">
						<EditButton dataItemId={agent._id} dataItemType="agents" />
					</td>
					<td className="py-3 px-6 text-center">
						<DeleteButton data={agent} dataType="agents" />
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
