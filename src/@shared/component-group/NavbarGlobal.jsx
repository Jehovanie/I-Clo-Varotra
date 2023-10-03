import BeforeNavBar from '../components/BeforeNavBar';
import Navbar from '../components/Navbar';
import AfterNavbar from '../components/AfterNavbar';

const NavbarGlobal = () => {
    return (
        <>
            <BeforeNavBar />
            <Navbar/>
            <AfterNavbar />
        </>
    );
};

export default NavbarGlobal;