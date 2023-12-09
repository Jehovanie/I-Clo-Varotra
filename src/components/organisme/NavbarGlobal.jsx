import BeforeNavBar from "./BeforeNavBar";
import Navbar from "./Navbar";
import AfterNavbar from "./AfterNavbar";

const NavbarGlobal = () => {
	return (
		<>
			<BeforeNavBar />
			<Navbar />
			<AfterNavbar />
		</>
	);
};

export default NavbarGlobal;
