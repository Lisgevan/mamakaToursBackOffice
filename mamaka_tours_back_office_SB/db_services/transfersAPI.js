import supabase from "./supabase";

export async function getAllTransfers() {
	const { data: transfers, error } = await supabase
		.from("transferOrders")
		.select("*, transferTo(*), transferFrom(*), agents(*), transferMeans(*)");

	const totalPrice = transfers.reduce((sum, transfer) => {
		return sum + transfer.transferPrice;
	}, 0);
	return { transfers, error, totalPrice };
}

export async function addAllTransferPrices() {}
