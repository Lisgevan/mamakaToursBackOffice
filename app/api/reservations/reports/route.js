import { NextResponse } from "next/server";
import connectToDatabase from "@/lib/mongodb";
import Accommodations from "@/models/Accommodations";
import Agents from "@/models/Agents";
import Locations from "@/models/Locations";
import TransferMean from "@/models/TransferMean";

export async function GET(req) {
	try {
		await connectToDatabase();

		const { searchParams } = new URL(req.url);
		const dataType = searchParams.get("dataType");

		if (!dataType) {
			return NextResponse.json({ success: false, message: "Missing dataType" }, { status: 400 });
		}

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
				return NextResponse.json({ success: false, message: "Invalid dataType" }, { status: 400 });
		}

		const data = await Model.find({}).lean(); // Fetch names only
		return NextResponse.json({ success: true, data }, { status: 200 });
	} catch (error) {
		console.error("API Error:", error);
		return NextResponse.json({ success: false, message: "Server error" }, { status: 500 });
	}
}
