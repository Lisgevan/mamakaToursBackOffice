import supabase from "./supabase";

export async function getAllTransfers() {
	const { data: transfers, error } = await supabase
		.from("transferOrders")
		.select("*, transferTo(*), transferFrom(*), agents(*), transferMeans(*)");

	return { transfers, error };
}
