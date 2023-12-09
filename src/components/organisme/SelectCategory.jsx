import CustomOption from "../atoms/CustomOption";

const SelectCategory = ({ listCategory: list_category }) => {
	const listCategory = "jehovanie"
		.split("")
		.map((item, index) => <CustomOption key={index + "_option_category"} text={"Category " + (index + 1)} />);

	return (
		<>
			<select
				id="countries"
				defaultValue={"Toutes categories"}
				className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
				{listCategory}
			</select>
		</>
	);
};

export default SelectCategory;
