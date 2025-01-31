"use server";

import connectToDatabase from "@/lib/mongodb";
import Accommodations from "@/models/Accommodations";

export async function getAccommodations() {
	await connectToDatabase();

	const accommodationsData = await Accommodations.find().lean();
	const accommodations = JSON.parse(JSON.stringify(accommodationsData));

	return accommodations;
}
