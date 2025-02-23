"use server";

import connectToDatabase from "@/lib/mongodb";
import Reservations from "@/models/Reservations";
import { revalidatePath } from "next/cache";

export async function editReservations(reservationId, formData) {
	try {
		await connectToDatabase();
		// Extract form data
		const {
			reference,
			agent,
			clientName,
			accommodation,
			adults,
			kids,
			infants,
			totalPax,
			taxiCost,
			agentFee,
			totalCost,
			reservationType,
			reservationDate,
			reservationTime,
			checkInOut,
			details,
		} = Object.fromEntries(formData.entries()); // Convert FormData to an object

		const reservation = {
			reference,
			agent,
			accommodation,
			clientName,
			totalPax,
			adults,
			kids,
			infants,
			reservationType,
			reservationDate: new Date(reservationDate),
			reservationTime,
			taxiCost,
			agentFee,
			totalCost: totalCost / 2,
			checkInOut: checkInOut === "on",
			details,
		};

		const updatedReservation = await Reservations.findByIdAndUpdate(reservationId, reservation, { new: true });

		revalidatePath("/");

		return { success: true, message: "Reservations added successfully" };
	} catch (error) {
		console.error("Error adding reservations:", error);
		return { success: false, message: "Server error" };
	}
}
