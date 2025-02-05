"use server";

import connectToDatabase from "@/lib/mongodb";
import TransferMean from "@/models/TransferMean";

export async function getTransferMean() {
	await connectToDatabase();

	const trtansferMeanData = await TransferMean.find().lean();
	const trtansferMean = JSON.parse(JSON.stringify(trtansferMeanData));

	return trtansferMean;
}
