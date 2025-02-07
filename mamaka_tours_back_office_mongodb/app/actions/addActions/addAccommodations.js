"use server";

import connectToDatabase from "@/lib/mongodb";
import Accommodations from "@/models/Accommodations";
import { revalidatePath } from "next/cache";

export async function addAccommodations(prevState, formData) {
	try {
		await connectToDatabase();

		console.log(formData);

		const newTransfer = new Accommodations(finalFormData);
		await newTransfer.save();

		revalidatePath("/");

		return { success: true, message: "Accommodations added successfully" };
	} catch (error) {
		console.error("Error adding accommodations:", error);
		return { success: false, message: "Server error" };
	}
}
