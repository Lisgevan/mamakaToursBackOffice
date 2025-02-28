import { Suspense } from "react";
import GlobalLoading from "@/components/GlobalLoading";
import Header from "@/components/Header";
import LinkButton from "@/components/LinkButton";

export default function MaintenancePage() {
	return (
		<>
			<Header pageName="MAINTENANCE PAGE">
				<LinkButton href="/maintenance/accommodations" cssClasses="text-green-500 border-green-500 hover:bg-green-500">
					ACCOMMODATIONS
				</LinkButton>
				<LinkButton href="/maintenance/agents" cssClasses="text-green-500 border-green-500 hover:bg-green-500">
					AGENTS
				</LinkButton>
				<LinkButton href="/maintenance/locations" cssClasses="text-green-500 border-green-500 hover:bg-green-500">
					LOCATIONS
				</LinkButton>
				<LinkButton href="/maintenance/transfermean" cssClasses="text-green-500 border-green-500 hover:bg-green-500">
					TRANSFER MEAN
				</LinkButton>
			</Header>
			<Suspense fallback={<GlobalLoading />}>
				<div id="content" className="w-screen bg-gray-400 flex justify-center">
					<h1 className="text-3xl self-center text-center py-14">
						SELECT ONE OF <br /> <br /> "<span className="font-bold">ACCOMMODATIONS</span>"<br /> - <br /> "
						<span className="font-bold">AGENTS</span>" <br /> -<br /> "<span className="font-bold">LOCATIONS</span>"{" "}
						<br /> - <br /> "<span className="font-bold">TRANSFER MEAN</span>"<br />
						<br /> TO ADD ONE ITEM IN THEIR LIST
					</h1>
				</div>
			</Suspense>
		</>
	);
}
