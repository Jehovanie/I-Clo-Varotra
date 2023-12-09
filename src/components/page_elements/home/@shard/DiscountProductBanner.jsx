import ShortText from "../../../atoms/ShortText";
import CustomButton from "../../../atoms/CustomButton";

import PriceOffBanner from "./PriceOffBanner";
import produit1 from "../../../../assets/produit/image1.png";

const DiscountProductBanner = () => {
	return (
		<>
			<div className="w-1/3 flex justify-center items-center">
				<PriceOffBanner priceOff={70} />
			</div>
			<div className="flex justify-between items-center w-2/3">
				<div className="block w-1/2">
					<img className="p-8 rounded-t-lg" src={produit1} alt="Produit 1" />
				</div>
				<div className="block w-1/2">
					<div>
						<h5 className="text-blue-500 font-bold text-2xl">Your</h5>
						<h3 className="text-blue-500 font-extrabold text-3xl"> Favourite </h3>
						<h3 className="text-blue-500 font-extrabold text-3xl"> Collection</h3> <br />
					</div>

					<div>
						<ShortText shortText={"Change your text and switch in your style."} />
						<ShortText shortText={"in your style."} />
						<CustomButton
							textShow={"Show in Details"}
							customClass={["bg-yellow-300", "text-white", "rounded-3xl", "w-2/3"]}
						/>
					</div>
				</div>
			</div>
		</>
	);
};

export default DiscountProductBanner;
