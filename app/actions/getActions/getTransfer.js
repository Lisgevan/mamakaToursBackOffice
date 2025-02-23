"use server";

import connectToDatabase from "@/lib/mongodb";
import Transfers from "@/models/Transfers";

export async function getTransfer(transferId) {
	await connectToDatabase();

	const transferData = await Transfers.findById(transferId).lean();
	const transfer = JSON.parse(JSON.stringify(transferData));

	return transfer;
}
