"use server";

import { revalidatePath } from "next/cache";
import connectToDatabase from "@/lib/mongodb";
import Accommodations from "@/models/Accommodations";
import Agents from "@/models/Agents";
import Locations from "@/models/Locations";
import Reservations from "@/models/Reservations";
import TransferMean from "@/models/TransferMean";
import Transfers from "@/models/Transfers";

export async function deleteData(data) {
	console.log("action: ", data);
	try {
		await connectToDatabase();

		// ✅ Choose the correct MongoDB model
		let Model;
		switch (data.dataType) {
			case "accommodations":
				Model = Accommodations;
				break;
			case "locations":
				Model = Locations;
				break;
			case "agents":
				Model = Agents;
				break;
			case "transferMean":
				Model = TransferMean;
				break;
			case "reservations":
				Model = Reservations;
				break;
			case "transfers":
				Model = Transfers;
				break;
			default:
				throw new Error("Invalid dataType");
		}

		await Model.findByIdAndDelete(data._id);
		revalidatePath("/");
		return { success: true };
	} catch (error) {
		console.error("Delete failed:", error);
		return { success: false, error: "Failed to delete data." };
	}
}
