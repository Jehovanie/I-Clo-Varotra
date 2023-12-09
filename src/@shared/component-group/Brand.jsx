import SingleBrand from "../components/SingleBrand";

const Brand = () => {
	return (
		<div className="brand_content mt-5">
			<div className="titre">
				<h2> Brand</h2>
			</div>

			<div className="w-full h-full flex justify-between items-center py-2">
				<SingleBrand />
				<SingleBrand />
				<SingleBrand />
				<SingleBrand />
				<SingleBrand />
				<SingleBrand />
				<SingleBrand />
				<SingleBrand />
				<SingleBrand />
				<SingleBrand />
				<SingleBrand />
				<SingleBrand />
			</div>
		</div>
	);
};

export default Brand;
