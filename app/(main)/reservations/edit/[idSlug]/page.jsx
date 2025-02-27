// import { getReservation } from "@/actions/getActions/getReservation";
import { getReservation } from "@/app/actions/getActions/getReservation";
import EditReservationForm from "@/components/formComponents/EditReservationForm";
import Header from "@/components/Header";
import LinkButton from "@/components/LinkButton";

export default async function AddReservation({ params }) {
	const { idSlug } = (await params) ?? "";
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
