"use server";

import connectToDatabase from "@/lib/mongodb";
import TrtansferMeans from "@/models/TrtansferMeans";

export async function getTrtansferMeans() {
	await connectToDatabase();

	const trtansferMeansData = await TrtansferMeans.find().lean();
	const trtansferMeans = JSON.parse(JSON.stringify(trtansferMeansData));

	return trtansferMeans;
}
