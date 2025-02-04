"use server";

import connectToDatabase from "@/lib/mongodb";
// import Transfers from "@/models/Transfers";
import { revalidatePath } from "next/cache";

export async function addTransfers(prevState, formData) {
	try {
		await connectToDatabase();
		console.log(formData);

		// // Extract form data
		// const {
		// 	reference,
		// 	agent,
		// 	accommodation,
		// 	clientName,
		// 	adults,
		// 	kids,
		// 	infants,
		// 	totalPax,
		// 	taxiCost,
		// 	agentFee,
		// 	totalCost,
		// 	arrivalDate,
		// 	arrivalTime,
		// 	departureDate,
		// 	departureTime,
		// 	details,
		// 	arrivalOnly,
		// 	departureOnly,
		// } = Object.fromEntries(formData.entries()); // Convert FormData to an object

		// // Convert values
		// // const totalPax = (s) || 0) + ( || 0) + (ts) || 0);
		// // const taxiCostNum = ost) || 0;
		// // const agentFeeNum = Fee) || 0;
		// // const totalCostNum = Cost) || 0;

		// const transfers = [];

		// if (!departureOnly) {
		// 	transfers.push({
		// 		reference,
		// 		agent,
		// 		accommodation,
		// 		clientName,
		// 		totalPax,
		// 		adults,
		// 		kids,
		// 		infants,
		// 		reservationType: "Arrival",
		// 		reservationDate: new Date(arrivalDate),
		// 		reservationTime: arrivalTime,
		// 		taxiCost,
		// 		agentFee,
		// 		totalCost: totalCost / 2,
		// 		checkInOut: false,
		// 		details,
		// 	});
		// }

		// if (!arrivalOnly) {
		// 	transfers.push({
		// 		reference: reference,
		// 		agent,
		// 		accommodation,
		// 		clientName,
		// 		totalPax,
		// 		adults,
		// 		kids,
		// 		infants,
		// 		reservationType: "Departure",
		// 		reservationDate: new Date(departureDate),
		// 		reservationTime: departureTime,
		// 		taxiCost,
		// 		agentFee,
		// 		totalCost: totalCost / 2,
		// 		checkInOut: false,
		// 		details,
		// 	});
		// }

		// // Save both transfers to the database
		// await Transfers.insertMany(transfers);

		revalidatePath("/");

		return { success: true, message: "Transfers added successfully" };
	} catch (error) {
		console.error("Error adding transfers:", error);
		return { success: false, message: "Server error" };
	}
}
