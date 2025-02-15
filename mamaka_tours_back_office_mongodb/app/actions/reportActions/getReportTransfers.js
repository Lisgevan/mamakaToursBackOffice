"use server";

import connectToDatabase from "@/lib/mongodb";
import Transfers from "@/models/Transfers";

export async function getReportTransfers(agent, dateFrom, dateTo, transferMean, transferType, paid) {
	await connectToDatabase();

	let filter = {};
	if (agent && dateFrom && dateTo && transferType) {
		filter = {
			transferDate: { $gte: dateFrom, $lte: dateTo },
			agent,
			transferType,
		};
	} else if (dateFrom && dateTo && transferMean && paid) {
		filter = {
			transferDate: { $gte: dateFrom, $lte: dateTo },
			transferMean,
			paid,
		};
	} else if (dateFrom && dateTo && transferMean) {
		filter = {
			transferDate: { $gte: dateFrom, $lte: dateTo },
			transferMean,
		};
	} else {
	}

	const transfersData = await Transfers.find(filter)
		.sort([["transferDate", "asc"]])
		.lean();
	const transfers = JSON.parse(JSON.stringify(transfersData));

	return transfers;
}
