import { Suspense } from "react";
import { unstable_noStore as noStore } from "next/cache";
import Header from "@/components/Header";
import TableContainer from "@/components/tableComponents/TableContainer";
import LinkButton from "@/components/LinkButton";
import GlobalLoading from "@/components/GlobalLoading";

function ReservationsPage() {
	noStore();

	return (
		<>
			<Header pageName="RESERVATION PAGE">
				<LinkButton href="/reservations/add" cssClasses="text-green-500 border-green-500 hover:bg-green-500">
					Add Reservation
				</LinkButton>
				<LinkButton href="/reservations/reports" cssClasses="text-indigo-500 border-indigo-500 hover:bg-indigo-500">
					Reports Page
				</LinkButton>
			</Header>
			<Suspense fallback={<GlobalLoading />}>
				<TableContainer tableType="reservations" />
			</Suspense>
		</>
	);
}

export default ReservationsPage;
