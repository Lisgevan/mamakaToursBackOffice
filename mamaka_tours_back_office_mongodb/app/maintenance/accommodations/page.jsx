import AddDataForm from "@/components/formComponents/AddDataForm";
import Header from "@/components/Header";
import TableContainer from "@/components/tableComponents/TableContainer";

export default function AccommodationsPage() {
	return (
		<>
			<Header pageName="ACCOMMODATIONS PAGE">
				<AddDataForm dataType={"accommodations"} />
			</Header>
			<TableContainer tableType={"accommodations"} />
		</>
	);
}
