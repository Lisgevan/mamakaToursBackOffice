"use server";

import connectToDatabase from "@/lib/mongodb";
import Accommodations from "@/models/Accommodations";
import Agents from "@/models/Agents";
import Locations from "@/models/Locations";
import TransferMean from "@/models/TransferMean";

export async function getDataById({ dataId, dataType }) {
	await connectToDatabase();

	let Model;
	switch (dataType) {
		case "accommodations":
			Model = Accommodations;
			break;
		case "locations":
			Model = Locations;
			break;
		case "agents":
			Model = Agents;
			break;
		case "transferMean":
			Model = TransferMean;
			break;
		default:
			throw new Error("Invalid dataType");
	}

	const datasById = await Model.findById(dataId).lean();
	const dataById = JSON.parse(JSON.stringify(datasById));

	return dataById;
}
