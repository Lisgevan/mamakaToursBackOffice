import classes from "./checkBox.module.css";

function CheckBox({ check }) {
	return (
		<div className={`${classes.container} ${classes.disableCheckbox} mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem]`}>
			<div className={`${classes.cover}`} />
			<input
				id="default-checkbox"
				type="checkbox"
				value=""
				className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
				defaultChecked={check}
			/>
		</div>
	);
}

export default CheckBox;
