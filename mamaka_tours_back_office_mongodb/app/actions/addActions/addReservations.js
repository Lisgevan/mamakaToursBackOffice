"use server";

import connectToDatabase from "@/lib/mongodb";
import Reservations from "@/models/Reservations";
import { revalidatePath } from "next/cache";

export async function addReservations(prevState, formData) {
	try {
		await connectToDatabase();

		// Extract form data
		const {
			reference,
			agent,
			accommodation,
			clientName,
			adults,
			kids,
			infants,
			totalPax,
			taxiCost,
			agentFee,
			totalCost,
			arrivalDate,
			arrivalTime,
			departureDate,
			departureTime,
			details,
			arrivalOnly,
			departureOnly,
		} = Object.fromEntries(formData.entries()); // Convert FormData to an object

		const reservations = [];

		if (!departureOnly) {
			reservations.push({
				reference,
				agent,
				accommodation,
				clientName,
				totalPax,
				adults,
				kids,
				infants,
				reservationType: "Arrival",
				reservationDate: new Date(arrivalDate),
				reservationTime: arrivalTime,
				taxiCost,
				agentFee,
				totalCost: totalCost / 2,
				checkInOut: false,
				details,
			});
		}

		if (!arrivalOnly) {
			reservations.push({
				reference: reference,
				agent,
				accommodation,
				clientName,
				totalPax,
				adults,
				kids,
				infants,
				reservationType: "Departure",
				reservationDate: new Date(departureDate),
				reservationTime: departureTime,
				taxiCost,
				agentFee,
				totalCost: totalCost / 2,
				checkInOut: false,
				details,
			});
		}

		// Save both reservations to the database
		await Reservations.insertMany(reservations);

		revalidatePath("/");

		return { success: true, message: "Reservations added successfully" };
	} catch (error) {
		console.error("Error adding reservations:", error);
		return { success: false, message: "Server error" };
	}
}
