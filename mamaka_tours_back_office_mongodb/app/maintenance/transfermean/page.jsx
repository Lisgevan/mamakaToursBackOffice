import EditModal from "@/components/EditModal";
import AddDataForm from "@/components/formComponents/AddDataForm";
import Header from "@/components/Header";
import TableContainer from "@/components/tableComponents/TableContainer";

export default async function TransferMeansPage({ searchParams }) {
	const { editModal } = await searchParams;
	const isModalOpen = editModal === "true"; // Read URL param
	return (
		<>
			<Header pageName="TRANSFER MEANS PAGE">
				<AddDataForm dataType={"transferMean"} />
			</Header>
			<TableContainer tableType={"transfermean"} />
			{isModalOpen && <EditModal dataType="locations" />}
		</>
	);
}
