import AllType from "../../../molecule/AllType";

import DiscountProductBanner from "./DiscountProductBanner";

const AsideBannier = () => {
	return (
		<div className="w-full h-full flex justify-start items-start">
			<div className="block h-full w-3/12">
				<AllType />
			</div>
			<div className="block w-9/12 h-full">
				<div className="flex justify-between items-center h-full">
					<DiscountProductBanner />
				</div>
			</div>
		</div>
	);
};

export default AsideBannier;
