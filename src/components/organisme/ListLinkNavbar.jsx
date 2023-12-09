import LinkNavbar from "../molecule/LinkNavbar";

const ListLinkNavbar = ({ listLink: list_link }) => {
	const listLink_Html = list_link.map((item, index) => (
		<li key={index + "_list_link_id"}>
			<LinkNavbar name={item.name} link={item.link} />
		</li>
	));

	return (
		<>
			<ul className="flex justify-start items-center  gap-4 max-containe">{listLink_Html}</ul>
		</>
	);
};

export default ListLinkNavbar;
