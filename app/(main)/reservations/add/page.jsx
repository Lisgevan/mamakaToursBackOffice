import AddReservationForm from "@/components/formComponents/AddReservationForm";
import Header from "@/components/Header";
import LinkButton from "@/components/LinkButton";

export default function AddReservation() {
	return (
		<>
			<Header pageName="ADD RESERVATION PAGE">
				<LinkButton href="/reservations" cssClasses="text-green-500 border-green-500 hover:bg-green-500">
					All Reservations
				</LinkButton>
			</Header>
			<AddReservationForm />
		</>
	);
}
