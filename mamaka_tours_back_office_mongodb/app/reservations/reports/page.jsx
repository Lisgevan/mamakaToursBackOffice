import { unstable_noStore as noStore } from "next/cache";
import Header from "@/components/Header";
import LinkButton from "@/components/LinkButton";
import TableContainer from "@/components/tableComponents/TableContainer";
import ReportReservationForm from "@/components/formComponents/ReportReservationForm";

export default async function ReportsPage({ searchParams }) {
	noStore();
	const reportSearchParams = await searchParams;

	return (
		<>
			<Header pageName="RESERVATION PAGE">
				<LinkButton href="/reservations" cssClasses="text-green-500 border-green-500 hover:bg-green-500">
					All Reservations
				</LinkButton>
				<ReportReservationForm />
			</Header>

			<TableContainer tableType="reservationsReport" reportSearchParams={reportSearchParams} />
		</>
	);
}
