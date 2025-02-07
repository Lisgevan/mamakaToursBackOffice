"use server";

import connectToDatabase from "@/lib/mongodb";
import Agents from "@/models/Agents";

export async function getAgents() {
	await connectToDatabase();

	const agentsData = await Agents.find().lean();
	const agents = JSON.parse(JSON.stringify(agentsData));

	return agents;
}
