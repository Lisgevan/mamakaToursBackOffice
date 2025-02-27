// "use server";

// import connectToDatabase from "@/lib/mongodb";
// import TransferMean from "@/models/TransferMean";

// export async function getTransferMean() {
// 	try {
// 		await connectToDatabase();

// 		const transferMeanData = await TransferMean.find().lean();
// 		const transferMean = JSON.parse(JSON.stringify(transferMeanData));

// 		return transferMean;
// 	} catch (error) {
// 		console.error("Error fetching transfer means:", error);
// 		return [];
// 	}
// }

"use server";

import connectToDatabase from "@/lib/mongodb";
import TransferMean from "@/models/TransferMean"; // Adjust your import path if needed

export async function getTransferMean() {
	try {
		await connectToDatabase();
		const data = await TransferMean.find({}).lean();
		return JSON.parse(JSON.stringify(data)); // Ensure serialization
	} catch (error) {
		return [];
	}
}
