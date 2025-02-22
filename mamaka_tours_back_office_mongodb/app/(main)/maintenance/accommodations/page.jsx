import EditModal from "@/components/EditModal";
import AddDataForm from "@/components/formComponents/AddDataForm";
import Header from "@/components/Header";
import TableContainer from "@/components/tableComponents/TableContainer";

export default async function AccommodationsPage({ searchParams }) {
	const { editModal } = await searchParams;
	const isModalOpen = editModal === "true"; // Read URL param

	return (
		<>
			<Header pageName="ACCOMMODATIONS PAGE">
				<AddDataForm dataType={"accommodations"} />
			</Header>
			<TableContainer tableType={"accommodations"} />
			{isModalOpen && <EditModal dataType="accommodations" />}
		</>
	);
}
