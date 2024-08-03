import supabase from "./supabase";

export async function getAllReservations() {
	let { data: reservations, error } = await supabase
		.from("reservations")
		.select("*, agents(*), accommodations(*)")
		.order("arrivalDate", { ascending: true });

	return { reservations, error };
}

export async function getAgentsReservations(queryData) {
	console.log("qwerty::", queryData);
	console.log("startDate::", queryData.arrivalDate);
	console.log("agentId::", queryData.agentId);
	let { data: agentsReservations, error } = await supabase
		.from("reservations")
		.select("*, agents(*), accommodations(*)")
		.order("arrivalDate", { ascending: true })
		.eq("agent", queryData.agentId)
		// .eq("arrivalDate", '31/5/2023');
		.eq("arrivalDate", queryData.arrivalDate);

	return { agentsReservations, error };
}
