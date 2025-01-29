import { unstable_noStore as noStore } from "next/cache";
import Button from "@/components/Button";
import FromToAgentPicker from "@/components/FromToAgentPicker";
import Header from "@/components/Header";
import TableContainer from "@/components/tableComponents/TableContainer";

async function ReservationsPage() {
	noStore();

	return (
		<>
			<Header pageName="RESERVATION PAGE">
				<Button colorClasses="text-green-500 border-green-500 hover:bg-green-500">Add reservation</Button>
				<FromToAgentPicker primaryColor="teal" />
			</Header>

			<TableContainer tableType="reservations" />
		</>
	);
}

export default ReservationsPage;
