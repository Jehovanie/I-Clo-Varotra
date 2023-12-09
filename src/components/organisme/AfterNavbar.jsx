import ListLinkNavbar from "./ListLinkNavbar";
import SelectCategory from "./SelectCategory";

function AfterNavbar() {
	const listLink = [
		{ name: "Home", link: "#" },
		{ name: "All Brands", link: "#" },
		{ name: "Discount Products", link: "#" },
		{ name: "All Sellers", link: "#" },
		{ name: "Seller Zone", link: "#" },
	];

	return (
		<div className="px-5 py-3 z-10 w-full bg-gray-200 ">
			<nav className="flex justify-between items-center max-container">
				<div className="block w-3/12">
					<SelectCategory listCategory={"jehovanie".split("")} />
				</div>

				<div className="text-lg leading-normal font-montserrat max-lg:hidden w-3/5">
					<ListLinkNavbar listLink={listLink} />
				</div>
			</nav>
		</div>
	);
}

export default AfterNavbar;
