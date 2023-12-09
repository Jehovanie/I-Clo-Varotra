import React from "react";

const LinkNavbar = ({ name, link }) => {
	return (
		<>
			<a href={link} className="font-montserrat leading-normal font-normal text-gray-500 text-base">
				{name}
			</a>
		</>
	);
};

export default LinkNavbar;
