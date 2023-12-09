import React from "react";
import Price from "../atoms/Price";

const DiscountPriceUI = ({ price, priceOff: price_off }) => {
	return (
		<>
			<Price price={price} option={{ isOff: true }} />
			<Price price={price_off} option={{ isOff: false }} />
		</>
	);
};

export default DiscountPriceUI;
