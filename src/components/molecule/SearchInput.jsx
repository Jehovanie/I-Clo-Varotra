import React from "react";
import CustomButton from "../atoms/CustomButton";

function SearchInput() {
	return (
		<div className="block w-1/3">
			<div className="w-full flex items-center max-sm:flex-col p-0.5 gap-4 sm:border sm:border-yellow-300 rounded-full">
				<input
					type="text"
					placeholder="Write the thing you want to look..."
					className=" block w-full pl-5 px-3 py-2 bg-transparent border-transparent text-sm outline-none focus:outline-none focus:ring-0 focus:outline-transparent focus:border-transparent"
				/>
				<div className="flex max-sm:justify-end items-center max-sm:w-full">
					<CustomButton
						textShow={"Search"}
						customClass={["bg-yellow-300", "text-white", "rounded-full", "w-full"]}
					/>
				</div>
			</div>
		</div>
	);
}

export default SearchInput;
// flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none bg-yellow-300 text-white border-coral-red rounded-full w-full
