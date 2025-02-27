import ReportTransferForm from "@/components/formComponents/ReportTransferForm";
import Header from "@/components/Header";
import LinkButton from "@/components/LinkButton";
import TableContainer from "@/components/tableComponents/TableContainer";
import { unstable_noStore as noStore } from "next/cache";
import Link from "next/link";

async function TransfersReportPage({ searchParams }) {
	noStore();
	const reportSearchParams = (await searchParams) ?? {};

	const query = new URLSearchParams(reportSearchParams);
	const queryString = query.toString();

	return (
		<>
			<Header pageName={`TRANSFER REPORT \n PAGE`}>
				<LinkButton href="/transfers" cssClasses="text-green-500 border-green-500 hover:bg-green-500">
					All Transfers
				</LinkButton>
				<ReportTransferForm />
				<Link
					href={`/transfers/reports/pdf?${queryString}`}
					target="_blank"
					rel="noopener noreferrer"
					className={`hover:text-white border font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 flex items-center justify-center text-sky-500 border-sky-500 hover:bg-sky-500 ms-4`}
				>
					Create PDF
				</Link>
			</Header>
			<TableContainer tableType="transfersReport" reportSearchParams={reportSearchParams} />
		</>
	);
}
export default TransfersReportPage;
