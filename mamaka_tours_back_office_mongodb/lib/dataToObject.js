export const dataToObject = data => {
	const obj = {};
	data.forEach((value, key) => {
		if (!key.includes("$action")) {
			obj[key] = value;
		}
	});
	return obj;
};
