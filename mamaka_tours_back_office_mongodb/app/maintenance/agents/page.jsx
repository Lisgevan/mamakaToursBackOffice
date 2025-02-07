import AddDataForm from "@/components/formComponents/AddDataForm";
import Header from "@/components/Header";
import TableContainer from "@/components/tableComponents/TableContainer";

export default function AgentssPage() {
	return (
		<>
			<Header pageName="AGENTS PAGE">
				<AddDataForm dataType={"agents"} />
			</Header>
			<TableContainer tableType={"agents"} />
		</>
	);
}
