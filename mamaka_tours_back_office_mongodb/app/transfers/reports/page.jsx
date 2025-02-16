import ReportTransferForm from "@/components/formComponents/ReportTransferForm";
import Header from "@/components/Header";
import LinkButton from "@/components/LinkButton";
import TableContainer from "@/components/tableComponents/TableContainer";
import { unstable_noStore as noStore } from "next/cache";

async function TransfersReportPage({ searchParams }) {
	noStore();
	const reportSearchParams = await searchParams;

	return (
		<>
			<Header pageName="TRANSFER PAGE">
				<LinkButton href="/transfers" cssClasses="text-green-500 border-green-500 hover:bg-green-500">
					All Transfers
				</LinkButton>
				<ReportTransferForm />
			</Header>
			<TableContainer tableType="transfersReport" reportSearchParams={reportSearchParams} />
		</>
	);
}
export default TransfersReportPage;
