const Price = ({ price, option }) => {
	const { isOff: is_off } = option;
	return is_off ? (
		<p className="font-thin line-through text-red-500"> ${price} </p>
	) : (
		<h3 className="font-extrabold text-md text-blue-600"> ${price}</h3>
	);
};
export default Price;
