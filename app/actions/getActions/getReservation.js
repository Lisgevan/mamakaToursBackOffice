"use server";

import connectToDatabase from "@/lib/mongodb";
import Reservations from "@/models/Reservations";

export async function getReservation(reservationId) {
	await connectToDatabase();

	const reservationData = await Reservations.findById(reservationId).lean();
	const reservation = JSON.parse(JSON.stringify(reservationData));

	return reservation;
}
