import { unstable_noStore as noStore } from "next/cache";
import { Suspense } from "react";
import GlobalLoading from "@/components/GlobalLoading";
import Header from "@/components/Header";
import LinkButton from "@/components/LinkButton";
import TableContainer from "@/components/tableComponents/TableContainer";
import { auth } from "@/auth";
import { redirect } from "next/navigation";

async function TransfersPage({ searchParams }) {
	noStore();
	const reportSearchParams = (await searchParams) ?? {};
	const session = await auth();
	console.log("transfers", session.user.email);
	if (!session) {
		redirect("/");
	}

	return (
		<>
			<Header pageName="TRANSFER PAGE">
				<LinkButton href="/transfers/add" cssClasses="text-green-500 border-green-500 hover:bg-green-500">
					Add Transfer
				</LinkButton>
				<LinkButton href="/transfers/reports" cssClasses="text-indigo-500 border-indigo-500 hover:bg-indigo-500">
					Reports Page
				</LinkButton>
			</Header>
			<Suspense fallback={<GlobalLoading />}>
				<TableContainer tableType="transfers" reportSearchParams={reportSearchParams} />
			</Suspense>
		</>
	);
}
export default TransfersPage;
