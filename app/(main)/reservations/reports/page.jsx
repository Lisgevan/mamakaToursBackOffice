import { unstable_noStore as noStore } from "next/cache";
import Header from "@/components/Header";
import LinkButton from "@/components/LinkButton";
import TableContainer from "@/components/tableComponents/TableContainer";
import ReportReservationForm from "@/components/formComponents/ReportReservationForm";
import Link from "next/link";

export default async function ReservationsReportsPage({ searchParams }) {
	noStore();
	const reportSearchParams = (await searchParams) ?? {};
	const query = new URLSearchParams(reportSearchParams);

	const queryString = query.toString();

	return (
		<>
			<Header pageName={`RESERVATION REPORT PAGE`}>
				<LinkButton href="/reservations" cssClasses="text-green-500 border-green-500 hover:bg-green-500">
					All Reservations
				</LinkButton>
				<ReportReservationForm />
				<Link
					href={`/reservations/reports/pdf?${queryString}`}
					target="_blank"
					rel="noopener noreferrer"
					className={`hover:text-white border font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 flex items-center justify-center text-sky-500 border-sky-500 hover:bg-sky-500 ms-4`}>
					Create PDF
				</Link>
			</Header>

			<TableContainer tableType="reservationsReport" reportSearchParams={reportSearchParams} />
		</>
	);
}
