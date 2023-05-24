import { useEffect, useState } from "react";
import produit1 from "./../../@assets/produit/image1.png"
import "./../../@assets/css/buy.css"
import { useDispatch } from "react-redux";
import { ADD_QUANTITY, CANCEL_BUY, DEL_QUANTITY } from "../../@service/@shared/constant";


const BuyOne = ({ product }) => {
    const { id, titre: name, description, origin, fournisseur, stock, price, image, note, category, quantity } = product;
    const [total_price, setTotalPrice] = useState(quantity * price);
    const dispatch = useDispatch();

    const handleDescremented = () => {
        if (quantity > 1) {
            dispatch({ type: DEL_QUANTITY, payload: { id, category } })
        }
    }

    const handleIncremented = () => {
        if (quantity < stock) {
            dispatch({ type: ADD_QUANTITY, payload: { id, category } })
        }
    }

    const cancelBuyOne = () => {

        if (confirm("Vous voulez vraiment annuler?")) {
            dispatch({ type: CANCEL_BUY, payload: { id, category } })
        } else {
            console.log("keep object")
        }
    }

    useEffect(() => {
        setTotalPrice(quantity * price)
    }, [quantity])

    return (
        <div className="flex flex-col items-center mb-2 bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
            <img className="p-4 h-50 md:w-1/2" src={produit1} alt={name} />
            <div className="flex flex-col justify-between p-4 leading-normal content_text">
                <p className="mb-2 tracking-tight text-gray-900">{name}</p>
                {/* <button data-modal-target="popup-modal" data-modal-toggle="popup-modal" className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">
                    X
                </button> */}
                <p className="cancel_buy" onClick={cancelBuyOne}>X</p>
                <div className="content_contenu flex mt-2">
                    <button
                        type="button"
                        className="text-white bg-yellow-300 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-md p-2 mr-2 mb-2 dark:focus:ring-yellow-900"
                        onClick={handleDescremented}
                    >-</button>
                    <p className="text-white bg-gray-500 focus:ring-4  font-medium rounded-lg text-md p-2 mr-2 mb-2">{quantity}</p>
                    <button
                        type="button"
                        className="text-white bg-yellow-300 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-md p-2 mr-2 mb-2 dark:focus:ring-yellow-900"
                        onClick={handleIncremented}
                    >+</button>
                </div>
                <p> Total : {total_price} </p>
            </div>

        </div>
    );
};

export default BuyOne;