import AddDataForm from "@/components/formComponents/AddDataForm";
import Header from "@/components/Header";
import TableContainer from "@/components/tableComponents/TableContainer";

export default function TransferMeansPage() {
	return (
		<>
			<Header pageName="TRANSFER MEANS PAGE">
				<AddDataForm dataType={"transferMean"} />
			</Header>
			<TableContainer tableType={"transfermean"} />
		</>
	);
}
