const formatDate = mongoDate => {
	const date = new Date(mongoDate);
	const day = String(date.getDate()).padStart(2, "0");
	const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are 0-based
	const year = date.getFullYear();
	const dateOnly = `${day}-${month}-${year}`;
	return dateOnly;
};
export default formatDate;
