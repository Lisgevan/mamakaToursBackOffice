import { getReportReservations } from "@/app/actions/reportActions/getReportReservations";

export async function GET(request) {
	const { searchParams } = new URL(request.url);
	const agent = searchParams.get("agent");
	const dateFrom = searchParams.get("dateFrom");
	const dateTo = searchParams.get("dateTo");

	try {
		const reservations = await getReportReservations(agent, dateFrom, dateTo);
		return new Response(JSON.stringify(reservations), {
			headers: { "Content-Type": "application/json" },
		});
	} catch (error) {
		return new Response(JSON.stringify({ error: error.message }), {
			status: 500,
			headers: { "Content-Type": "application/json" },
		});
	}
}
