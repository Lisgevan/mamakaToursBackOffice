import EditModal from "@/components/EditModal";
import AddDataForm from "@/components/formComponents/AddDataForm";
import Header from "@/components/Header";
import TableContainer from "@/components/tableComponents/TableContainer";
import connectToDatabase from "@/lib/mongodb";
import Agents from "@/models/Agents";

export default async function AgentssPage({ searchParams }) {
	const { editModal } = await searchParams;
	const isModalOpen = editModal === "true"; // Read URL param

	// Fetch agents data
	await connectToDatabase();
	const agentsData = await Agents.find().lean();
	const agents = JSON.parse(JSON.stringify(agentsData));

	return (
		<>
			<Header pageName="AGENTS PAGE">
				<AddDataForm dataType={"agents"} />
			</Header>
			<TableContainer tableType={"agents"} data={agents} />
			{isModalOpen && <EditModal dataType="agents" />}
		</>
	);
}
