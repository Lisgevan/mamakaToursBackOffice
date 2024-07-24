import supabase from "@/db_services/supabase";

async function ReservationsPage() {
	let { data: reservations, error } = await supabase.from("reservations").select("*");
	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-24">
			<h1>REASERVATIONS PAGE</h1>
			<ul>{reservations && reservations.map((reservation, i) => <li key={i}>{reservation.ReservationID}</li>)}</ul>
		</main>
	);
}

export default ReservationsPage;
