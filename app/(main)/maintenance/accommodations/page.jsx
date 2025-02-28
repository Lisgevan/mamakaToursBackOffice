import { Suspense } from "react";
import EditModal from "@/components/EditModal";
import AddDataForm from "@/components/formComponents/AddDataForm";
import GlobalLoading from "@/components/GlobalLoading";
import Header from "@/components/Header";
import TableContainer from "@/components/tableComponents/TableContainer";
import connectToDatabase from "@/lib/mongodb";
import Accommodations from "@/models/Accommodations";

export default async function AccommodationsPage({ searchParams }) {
	const { editModal } = await searchParams;
	const isModalOpen = editModal === "true"; // Read URL param

	await connectToDatabase();
	const accommodationsData = await Accommodations.find().lean();
	const accommodations = JSON.parse(JSON.stringify(accommodationsData));

	return (
		<>
			<Header pageName="ACCOMMODATIONS PAGE">
				<AddDataForm dataType={"accommodations"} />
			</Header>
			<Suspense fallback={<GlobalLoading />}>
				<TableContainer tableType={"accommodations"} data={accommodations} />
				{isModalOpen && <EditModal dataType="accommodations" />}
			</Suspense>
		</>
	);
}
