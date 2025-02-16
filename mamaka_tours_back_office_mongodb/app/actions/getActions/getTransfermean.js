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
	// console.log("🔵 Server Action: getTransferMean() called"); // ✅ Debugging

	try {
		await connectToDatabase();
		// console.log("🟢 Database Connected"); // ✅ Debugging

		const data = await TransferMean.find({});
		// console.log("🟣 Data Fetched:", data); // ✅ Debugging

		return JSON.parse(JSON.stringify(data)); // Ensure serialization
	} catch (error) {
		// console.error("🔴 getTransferMean() Error:", error);
		return [];
	}
}
