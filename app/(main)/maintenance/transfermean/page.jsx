import { Suspense } from "react";
import EditModal from "@/components/EditModal";
import AddDataForm from "@/components/formComponents/AddDataForm";
import GlobalLoading from "@/components/GlobalLoading";
import Header from "@/components/Header";
import TableContainer from "@/components/tableComponents/TableContainer";
import connectToDatabase from "@/lib/mongodb";
import TransferMean from "@/models/TransferMean";

export default async function TransferMeansPage({ searchParams }) {
	const { editModal } = (await searchParams) ?? {};
	const isModalOpen = editModal === "true"; // Read URL param

	await connectToDatabase();

	const transferMeanData = await TransferMean.find().lean();
	const transferMeans = JSON.parse(JSON.stringify(transferMeanData));

	return (
		<>
			<Header pageName="TRANSFER MEANS PAGE">
				<AddDataForm dataType={"transferMean"} />
			</Header>
			<Suspense fallback={<GlobalLoading />}>
				<TableContainer tableType={"transfermean"} data={transferMeans} />
				{isModalOpen && <EditModal dataType="locations" />}
			</Suspense>
		</>
	);
}
