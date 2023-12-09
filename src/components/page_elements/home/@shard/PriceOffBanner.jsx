const PriceOffBanner = ({ priceOff: price_off }) => {
	return (
		<div>
			<div className="block rounded-full border p-3 text-center border-blue-400 select-none animate-ping">
				<div className="block rounded-full border p-3 text-center border-blue-400">
					<div className="block rounded-full border p-5 text-center border-blue-500">
						<p className="text-red-400 text-xl font-extrabold">{price_off}%</p>
						<h2 className="text-red-600 text-4xl font-extrabold ">OFF</h2>
					</div>
				</div>
			</div>
		</div>
	);
};

export default PriceOffBanner;
