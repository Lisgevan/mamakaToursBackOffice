import AddDataForm from "@/components/formComponents/AddDataForm";
import Header from "@/components/Header";
import TableContainer from "@/components/tableComponents/TableContainer";

export default function LocationsPage() {
	return (
		<>
			<Header pageName="LOCATIONS PAGE">
				<AddDataForm dataType={"locations"} />
			</Header>
			<TableContainer tableType={"locations"} />
		</>
	);
}
