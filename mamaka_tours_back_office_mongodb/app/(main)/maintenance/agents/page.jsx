import EditModal from "@/components/EditModal";
import AddDataForm from "@/components/formComponents/AddDataForm";
import Header from "@/components/Header";
import TableContainer from "@/components/tableComponents/TableContainer";

export default async function AgentssPage({ searchParams }) {
	const { editModal } = await searchParams;
	const isModalOpen = editModal === "true"; // Read URL param

	return (
		<>
			<Header pageName="AGENTS PAGE">
				<AddDataForm dataType={"agents"} />
			</Header>
			<TableContainer tableType={"agents"} />
			{isModalOpen && <EditModal dataType="agents" />}
		</>
	);
}
