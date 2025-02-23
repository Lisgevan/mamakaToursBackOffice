import EditModal from "@/components/EditModal";
import AddDataForm from "@/components/formComponents/AddDataForm";
import Header from "@/components/Header";
import TableContainer from "@/components/tableComponents/TableContainer";
import connectToDatabase from "@/lib/mongodb";
import Locations from "@/models/Locations";

export default async function LocationsPage({ searchParams }) {
	const { editModal } = await searchParams;
	const isModalOpen = editModal === "true"; // Read URL param

	await connectToDatabase();

	const locationsData = await Locations.find().lean();
	const locations = JSON.parse(JSON.stringify(locationsData));
	return (
		<>
			<Header pageName="LOCATIONS PAGE">
				<AddDataForm dataType={"locations"} />
			</Header>
			<TableContainer tableType={"locations"} data={locations} />
			{isModalOpen && <EditModal dataType="locations" />}
		</>
	);
}
