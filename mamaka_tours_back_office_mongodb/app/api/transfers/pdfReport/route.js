import { getReportTransfers } from "@/app/actions/reportActions/getReportTransfers";

export async function GET(request) {
	const { searchParams } = new URL(request.url);
	const agent = searchParams.get("agent");
	const dateFrom = searchParams.get("dateFrom");
	const dateTo = searchParams.get("dateTo");
	const transferMean = searchParams.get("transferMean");
	const transferType = searchParams.get("transferType");
	const paid = searchParams.get("paid");

	try {
		const transfers = await getReportTransfers(agent, dateFrom, dateTo, transferMean, transferType, paid);
		return new Response(JSON.stringify(transfers), {
			headers: { "Content-Type": "application/json" },
		});
	} catch (error) {
		return new Response(JSON.stringify({ error: error.message }), {
			status: 500,
			headers: { "Content-Type": "application/json" },
		});
	}
}
