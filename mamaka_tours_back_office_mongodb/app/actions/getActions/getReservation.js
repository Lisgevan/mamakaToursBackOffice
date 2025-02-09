"use server";

import connectToDatabase from "@/lib/mongodb";
import Reservations from "@/models/Reservations";

export async function getReservation(reservationId) {
	await connectToDatabase();

	const reservationsData = await Reservations.findById(reservationId).lean();
	const reservations = JSON.parse(JSON.stringify(reservationsData));

	return reservations;
}
