import BrandCarrousel from "./@shard/BrandCarrousel";
import NavbarGlobal from "../../organisme/NavbarGlobal";
import FlashDeal from "./@shard/FlashDeal";

import AsideBannier from "./@shard/AsideBannier";
import DisplayCarrousel from "./@shard/DisplayCarrousel";

const HomeContent = () => {
	return (
		<>
			<NavbarGlobal />

			<div className="block mx-5">
				<div className="w-full h-[350px] overflow-y-hidden">
					<AsideBannier />
				</div>

				<div className="w-full h-full flex justify-center items-center gap-3">
					<div className="block w-1/4">
						<FlashDeal time={99999} />
					</div>
					<div className="block w-3/4">
						<DisplayCarrousel />
					</div>
				</div>
				<div className="w-full h-full">
					<BrandCarrousel />
				</div>
			</div>
		</>
	);
};

export default HomeContent;
