import { Suspense } from "react";
import AddTransfernForm from "@/components/formComponents/AddTransferForm";
import GlobalLoading from "@/components/GlobalLoading";
import Header from "@/components/Header";
import LinkButton from "@/components/LinkButton";

export default function AddTrandfer() {
	return (
		<>
			<Header pageName="ADD TRANSFER PAGE">
				<LinkButton href="/transfers" cssClasses="text-green-500 border-green-500 hover:bg-green-500">
					All Transfers
				</LinkButton>
			</Header>
			<Suspense fallback={<GlobalLoading />}>
				<AddTransfernForm />
			</Suspense>
		</>
	);
}
