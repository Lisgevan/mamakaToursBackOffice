import Button from "@/components/Button";
import Header from "@/components/Header";
import TableContainer from "@/components/tableComponents/TableContainer";

async function ReservationsPage() {
	return (
		<>
			<Header pageName="TRANSFER PAGE">
				<Button colorClasses="text-green-500 border-green-500 hover:bg-green-500">Add transfer order</Button>
			</Header>
			<TableContainer tableType="transfers" />
		</>
	);
}
export default ReservationsPage;
