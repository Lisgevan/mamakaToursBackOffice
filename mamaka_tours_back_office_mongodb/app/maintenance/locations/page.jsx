import EditModal from "@/components/EditModal";
import AddDataForm from "@/components/formComponents/AddDataForm";
import Header from "@/components/Header";
import TableContainer from "@/components/tableComponents/TableContainer";

export default async function LocationsPage({ searchParams }) {
	const { editModal } = await searchParams;
	const isModalOpen = editModal === "true"; // Read URL param
	return (
		<>
			<Header pageName="LOCATIONS PAGE">
				<AddDataForm dataType={"locations"} />
			</Header>
			<TableContainer tableType={"locations"} />
			{isModalOpen && <EditModal dataType="locations" />}
		</>
	);
}
