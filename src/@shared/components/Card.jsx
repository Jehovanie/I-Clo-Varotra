import { useDispatch } from "react-redux";
import { handlePayment } from "../../@utils/api_airtle";
import { MdReadMore } from "react-icons/md";
import { FaShoppingCart } from "react-icons/fa";
import produit1 from "./../../@assets/produit/image1.png"


import "./../../@assets/css/details.css"
import { ADD_TO_PANIER } from "../../redux/@shared/constant";
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
                    <a href="#">
                        <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{description.length > 50 ? description.substring(0, 20) + "..." : description}</h5>
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
                            <button data-modal-target="defaultModal" data-modal-toggle="defaultModal" className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-xl px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">
                                <MdReadMore />
                            </button>
                        </div>
                    </div>
                </div>
            </div>


            {/*  Main modal details  */}
            <div id="defaultModal" tabIndex="-1" aria-hidden="true" className="fixed top-0 left-0 right-0 z-50 hidden w-auto p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] md:h-full">
                <div className="relative w-full h-full max-w-2xl md:h-auto">
                    {/* Modal content */}
                    <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                        {/* Modal body */}
                        <div className="p-2">
                            <div className="w-full flex flex-col items-center bg-white md:flex-row md:max-w-xl dark:border-gray-700 dark:bg-gray-800">
                                <img className="w-full h-100 md:h-auto md:w-1/2" src={produit1} alt={name} />
                                <div className="flex flex-col p-4 w-full">
                                    <div className="element">
                                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{name}</h5>
                                        <p className="value price c-yellow-300 hover:color-yellow-500"> {`${price}€`} </p>
                                    </div>
                                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                                        {description}
                                    </p>

                                    <div className="element">
                                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Origin</h5>
                                        <p className="value"> {origin} </p>
                                    </div>

                                    <div className="element">
                                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Fournisseur</h5>
                                        <p className="value"> {fournisseur} </p>
                                    </div>

                                    <div className="element">
                                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Stock</h5>
                                        <p className="value"> {stock} (pieces)</p>
                                    </div>

                                </div>
                            </div>

                        </div>
                        {/* Modal footer */}
                        <div className="flex justify-end items-center p-2 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
                            <button
                                data-modal-hide="defaultModal"
                                type="button"
                                className="text-white bg-yellow-300 hover:bg-yellow-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-yellow-600 dark:hover:bg-yellow-700 dark:focus:ring-yellow-800"
                                onClick={() => addToPannier(category, id)}
                            >
                                Acheter des maintenat
                            </button>
                            {/* <button data-modal-hide="defaultModal" type="button" className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">Annuler</button> */}
                        </div>
                    </div>
                </div>
            </div>

        </div>

    )
}

export default Card;