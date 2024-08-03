"use server";
import { getAgentsReservations } from "@/db_services/reservationsAPI";

function agentsReservations(agentId) {
	return getAgentsReservations(agentId);
}

export default agentsReservations;
