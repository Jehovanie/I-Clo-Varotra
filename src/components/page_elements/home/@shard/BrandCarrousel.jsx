import Carousel from "better-react-carousel";
import SingleBrand from "./SingleBrand";

const BrandCarrousel = () => {
	const all_brand = "jehovanie_ramandrijoel".split("").map((i, index) => (
		<Carousel.Item key={index + "_brand_id"}>
			<SingleBrand />
		</Carousel.Item>
	));

	return (
		<div className="brand_content mt-5">
			<div className="titre">
				<h2> Brand</h2>
			</div>

			<div className="w-full h-full py-2">
				<Carousel cols={12} rows={1} gap={2} loop={true} scrollSnap={false} showDots={true}>
					{all_brand}
				</Carousel>
			</div>
		</div>
	);
};

export default BrandCarrousel;
