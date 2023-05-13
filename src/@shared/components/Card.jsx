import { useDispatch } from "react-redux";
import { MdReadMore } from "react-icons/md";
import { FaShoppingCart } from "react-icons/fa";
import produit1 from "./../../@assets/produit/image1.png"


import "./../../@assets/css/details.css"
import { ADD_TO_PANIER } from "../../redux/@shared/constant";
import ModalDetails from "./ModalDetails";


const Card = ({ product }) => {

    const start_note = [];
    const dispatch = useDispatch();
    ///titre, description, origin, fournisseur, stock, price, image
    const { id, category, titre: name, description, origin, fournisseur, stock, price, image, note } = product;
    for (let i = 0; i < 5; i++) {
        let only_start = "";
        if (i < note) {
            only_start = <svg key={i} aria-hidden="true" className="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
        } else {
            only_start = <svg key={i} aria-hidden="true" className="w-5 h-5 text-gray-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
        }

        start_note.push(only_start);
    }

    const addToPannier = (category, id) => {

        dispatch({ type: ADD_TO_PANIER, payload: { category, id } })
    }

    return (
        <div className="w-full">

            <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                    <img className="p-8 rounded-t-lg" src={produit1} alt={name} />
                </a>
                <div className="px-5 pb-5">
                    <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white" >{name}</h2>
                    <a href="#">
                        <h5 className="mb-3 text-gray-500 dark:text-gray-400">{description.length > 50 ? description.substring(0, 20) + "..." : description}</h5>
                    </a>
                    <div className="flex items-center mt-2.5 mb-5">
                        {start_note}
                    </div>
                    <div className="flex items-center justify-between">
                        <span className="text-3xl font-bold text-gray-900 dark:text-white">{`$${price}`}</span>
                        <div className="content_tow_cta">

                            <button
                                type="button"
                                className="flex items-center justify-between focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-small rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:focus:ring-yellow-900"
                                onClick={() => addToPannier(category, id)}
                            >
                                + <FaShoppingCart />
                            </button>
                            <button data-modal-target={"defaultModal_" + id} data-modal-toggle={"defaultModal_" + id} className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-xl px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">
                                <MdReadMore />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <ModalDetails product={product} />
        </div >

    )
}

export default Card;