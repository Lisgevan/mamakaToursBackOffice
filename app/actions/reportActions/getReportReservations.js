"use server";

import connectToDatabase from "@/lib/mongodb";
import Reservations from "@/models/Reservations";

export async function getReportReservations(agent = undefined, dateFrom = undefined, dateTo = undefined) {
	await connectToDatabase();

	if (agent && dateFrom && dateTo) {
		const filter = {
			reservationDate: { $gte: dateFrom, $lte: dateTo },
			agent,
		};

		const reservationsData = await Reservations.find(filter)
			.sort([["reservationDate", "asc"]])
			.lean();
		const reservations = JSON.parse(JSON.stringify(reservationsData));

		return reservations;
	}
	const filter = {};

	const reservationsData = await Reservations.find(filter)
		.sort([["reservationDate", "asc"]])
		.lean();
	const reservations = JSON.parse(JSON.stringify(reservationsData));

	return reservations;
}
