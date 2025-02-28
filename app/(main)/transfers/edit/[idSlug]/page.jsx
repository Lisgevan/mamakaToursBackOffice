import { Suspense } from "react";
import { getTransfer } from "@/app/actions/getActions/getTransfer";
import EditTransferForm from "@/components/formComponents/EditTransferForm";
import GlobalLoading from "@/components/GlobalLoading";
import Header from "@/components/Header";
import LinkButton from "@/components/LinkButton";

export default async function AddReservation({ params }) {
	const { idSlug } = (await params) ?? "";
	const transfer = await getTransfer(idSlug);
	return (
		<>
			<Header pageName="ADD TRANSFER PAGE">
				<LinkButton href="/transfers" cssClasses="text-green-500 border-green-500 hover:bg-green-500">
					All Transfers
				</LinkButton>
			</Header>
			<Suspense fallback={<GlobalLoading />}>
				<EditTransferForm transfer={transfer} />
			</Suspense>
		</>
	);
}
