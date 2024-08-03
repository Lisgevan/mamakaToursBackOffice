import supabase from "./supabase";

export async function getAllAgents() {
	let { data: agents, error } = await supabase.from("agents").select("*").order("agentId", { ascending: true });

	return { agents, error };
}
