import { getReservation } from "@/app/(main)/actions/getActions/getReservation";
import EditReservationForm from "@/app/(main)/components/formComponents/EditReservationForm";
import Header from "@/app/(main)/components/Header";
import LinkButton from "@/app/(main)/components/LinkButton";

export default async function AddReservation({ params }) {
	const { idSlug } = await params;
	const reservation = await getReservation(idSlug);
	return (
		<>
			<Header pageName="ADD RESERVATION PAGE">
				<LinkButton href="/reservations" cssClasses="text-green-500 border-green-500 hover:bg-green-500">
					All Reservations
				</LinkButton>
			</Header>
			<EditReservationForm reservation={reservation} />
		</>
	);
}
