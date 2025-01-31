"use server";

import connectToDatabase from "@/lib/mongodb";
import Locations from "@/models/Locations";

export async function getLocations() {
	await connectToDatabase();

	const locationsData = await Locations.find().lean();
	const locations = JSON.parse(JSON.stringify(locationsData));

	return locations;
}
