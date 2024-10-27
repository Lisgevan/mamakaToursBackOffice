import supabase from "./supabase";

export async function getAllReservations() {
	let { data: reservations, error } = await supabase
		.from("reservations")
		.select("*, agents(*), accommodations(*)")
		.order("reservationDate", { ascending: true });

	// console.log("reservations:", reservations);

	return { reservations, error };
}

export async function getAgentsReservations(queryData) {
	console.log("qwerty::", queryData);
	console.log("startDate::", queryData.startDate);
	console.log("agentId::", queryData.agentId);
	let { data: agentsReservations, error } = await supabase
		.from("reservations")
		.select("*, agents(*), accommodations(*)")
		.order("reservationDate", { ascending: true })
		.eq("agent", queryData.agentId)
		// .eq("reservationDate", "2023-05-31");
		.eq("reservationDate", queryData.startDate);

	return { agentsReservations, error };
}
