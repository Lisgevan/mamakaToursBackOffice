import { Suspense } from "react";
import AddReservationForm from "@/components/formComponents/AddReservationForm";
import GlobalLoading from "@/components/GlobalLoading";
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
			<Suspense fallback={<GlobalLoading />}>
				<AddReservationForm />
			</Suspense>
		</>
	);
}
