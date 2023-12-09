import ItemList from "../atoms/ItemList";

const AllType = () => {
	const list_type = [
		{ icon: "#", label: "Women's Fashion" },
		{ icon: "#", label: "Men's Fashion" },
		{ icon: "#", label: "Phones & Telecom" },
		{ icon: "#", label: "Computer, Office & Security" },
		{ icon: "#", label: "Jewlry & Watches" },
		{ icon: "#", label: "Home, Pet & Appliances" },
		{ icon: "#", label: "Bags & Shoes" },
		{ icon: "#", label: "Toy's, Kids & bubies" },
		{ icon: "#", label: "Outdoor Fun & Sports" },
		{ icon: "#", label: "Home improvement & Tools" },
	];

	const list_type_jsx = list_type.map((item, index) => {
		return <ItemList key={index + "_app_list"} text={item.label} />;
	});

	return (
		<>
			<ul className="flex flex-col items-start justify-start w-full">{list_type_jsx}</ul>
		</>
	);
};

export default AllType;
