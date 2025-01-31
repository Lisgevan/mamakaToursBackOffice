import { unstable_noStore as noStore } from "next/cache";
import FromToAgentPicker from "@/components/FromToAgentPicker";
import Header from "@/components/Header";
import TableContainer from "@/components/tableComponents/TableContainer";
import LinkButton from "@/components/LinkButton";

function ReservationsPage() {
	noStore();

	return (
		<>
			<Header pageName="RESERVATION PAGE">
				<LinkButton href="/reservations/add" cssClasses="text-green-500 border-green-500 hover:bg-green-500">
					Add Reservation
				</LinkButton>
				<FromToAgentPicker primaryColor="teal" />
			</Header>

			<TableContainer tableType="reservations" />
		</>
	);
}

export default ReservationsPage;
