import supabase from "./supabase";

export async function getAllReservations() {
	let { data: reservations, error } = await supabase
		.from("reservations")
		.select("*, agents(*), accommodations(*)")
		.order("arrivalDate", { ascending: true });

	return { reservations, error };
}
