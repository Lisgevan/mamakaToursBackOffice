export default function TableHead({ tableType }) {
	let tableHeadList = [];
	const reservationsHeadList = [
		"ID",
		"Reference",
		"Agent",
		"Accommodation",
		"Pax",
		"Total Charge",
		"Client's Name",
		"Reservation Type",
		"Date",
		"Time",
		"Checked In/Out",
		"Details",
		"EDIT",
		"DETELE",
	];
	const transfersHeadList = [
		"ID",
		"Transfer Type",
		"Agent",
		"Means",
		"Date",
		"Time",
		"From",
		"To",
		"Price",
		"Paid",
		"Details",
		"No Show",
		"EDIT",
		"DETELE",
	];

	const accommodationsHeadList = ["ID", "NAME", "EDIT", "DELETE"];
	const agentsHeadList = ["ID", "NAME", "EDIT", "DELETE"];
	const locationsHeadList = ["ID", "NAME", "EDIT", "DELETE"];
	const transferMeanHeadList = ["ID", "NAME", "FULLNAME", "EDIT", "DELETE"];

	switch (tableType) {
		case "reservations":
			tableHeadList = reservationsHeadList;
			break;
		case "transfers":
			tableHeadList = transfersHeadList;
			break;
		case "accommodations":
			tableHeadList = accommodationsHeadList;
			break;
		case "agents":
			tableHeadList = agentsHeadList;
			break;
		case "locations":
			tableHeadList = locationsHeadList;
			break;
		case "transfermean":
			tableHeadList = transferMeanHeadList;
			break;
		default:
			break;
	}

	return (
		<thead className="z-10 sticky top-36">
			<tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
				{tableHeadList.map((headTitle, index) => (
					<th key={index} className="py-3 px-6 text-center">
						{headTitle}
					</th>
				))}
			</tr>
		</thead>
	);
}
