import Header from "@/components/Header";
import LinkButton from "@/components/LinkButton";
import TableContainer from "@/components/tableComponents/TableContainer";

export default function AccommodationsPage() {
	return (
		<>
			<Header pageName="ACCOMMODATIONS PAGE">
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
					TRANSFER MEANS
				</LinkButton>
			</Header>
			<TableContainer tableType={"accommodations"} />
		</>
	);
}
