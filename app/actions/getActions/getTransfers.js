"use server";

import connectToDatabase from "@/lib/mongodb";
import Transfers from "@/models/Transfers";

export async function getTransfers() {
	await connectToDatabase();

	const transfersData = await Transfers.find()
		.sort([["transferDate", "asc"]])
		.lean();
	const transfers = JSON.parse(JSON.stringify(transfersData));

	return transfers;
}
