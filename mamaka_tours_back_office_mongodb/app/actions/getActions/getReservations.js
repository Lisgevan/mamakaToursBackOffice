"use server";

import connectToDatabase from "@/lib/mongodb";
import Reservations from "@/models/Reservations";

export async function getReservations() {
	await connectToDatabase();

	const reservationsData = await Reservations.find()
		.sort([["reservationDate", "asc"]])
		.lean();
	const reservations = JSON.parse(JSON.stringify(reservationsData));

	return reservations;
}
