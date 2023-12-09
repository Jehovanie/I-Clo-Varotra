import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";
import { FaShoppingCart } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { TOGGLE_PANIER } from "../../@service/@shared/constant";
import SearchInput from "../molecule/SearchInput";

const Navbar = () => {
	const dispatch = useDispatch();
	return (
		<nav className="nav_component">
			<div className="bg-gray-100 flex flex-wrap justify-between items-center mx-auto py-2 md:px-6 ">
				<Link to="/" className="flex items-center">
					<img src={logo} className="h-6 mr-3 sm:h-9" alt="Flowbite Logo" />
					<span className="self-center text-xl font-semibold whitespace-nowrap sm:none">E-clo-varotra</span>
				</Link>

				<SearchInput />

				<div className="flex items-center">
					{/* <NavLink to="signin" className="text-sm font-medium text-blue-600 dark:text-blue-500 hover:underline">Login</NavLink> */}
					<div className="flex items-center md:order-2">
						<button
							type="button"
							onClick={() => dispatch({ type: TOGGLE_PANIER })}
							className="content_fa_shopping_js_jheo focus:outline-none text-white bg-yellow-200 hover:bg-yellow-300 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-md px-5 py-2.5 mr-2 mb-2 dark:focus:ring-yellow-900">
							<FaShoppingCart />
						</button>
						{/* <button data-collapse-toggle="mobile-menu-language-select" type="button" className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu-language-select" aria-expanded="false">
                            <span className="sr-only">Open main menu</span>
                            <svg className="w-6 h-6" fill="currentColor" aria-hidden="true" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
                        </button> */}
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
