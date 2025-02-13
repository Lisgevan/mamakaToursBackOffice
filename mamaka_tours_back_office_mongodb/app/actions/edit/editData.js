"use server";

import { revalidatePath } from "next/cache";
import connectToDatabase from "@/lib/mongodb";
import Accommodations from "@/models/Accommodations";
import Agents from "@/models/Agents";
import Locations from "@/models/Locations";
import TransferMean from "@/models/TransferMean";

export async function editData(dataId, dataType, formData) {
	try {
		await connectToDatabase();

		// ✅ Choose the correct MongoDB model
		let Model;
		switch (dataType) {
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
			default:
				throw new Error("Invalid dataType");
		}

		// ✅ Create and save the new document
		const updatedData = await Model.findByIdAndUpdate(dataId, formData, { new: true });

		// ✅ Revalidate the cache to update UI
		revalidatePath("/");

		return { success: true, message: "Data added successfully" };
	} catch (error) {
		console.error("Error adding Data:", error);
		return { success: false, message: "Server error" };
	}
}
