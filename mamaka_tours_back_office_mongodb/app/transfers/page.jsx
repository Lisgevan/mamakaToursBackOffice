import Button from "@/components/Button";
import Header from "@/components/Header";
import LinkButton from "@/components/LinkButton";
import TableContainer from "@/components/tableComponents/TableContainer";
import { unstable_noStore as noStore } from "next/cache";

async function ReservationsPage() {
	noStore();

	return (
		<>
			<Header pageName="TRANSFER PAGE">
				<LinkButton href="/transfers/add" cssClasses="text-green-500 border-green-500 hover:bg-green-500">
					Add Transfer
				</LinkButton>
			</Header>
			<TableContainer tableType="transfers" />
		</>
	);
}
export default ReservationsPage;
