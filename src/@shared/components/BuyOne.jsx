import { useEffect, useState } from "react";
import produit1 from "./../../@assets/produit/image1.png"


const BuyOne = ({ product }) => {
    const { titre: name, description, origin, fournisseur, stock, price, image, note } = product;
    const [quantity, setQuantity] = useState(1)
    const [total_price, setTotalPrice] = useState(quantity * price);
    const handleDescremented = () => {
        if (quantity > 1) {
            setQuantity((prev) => prev - 1)
        }
    }

    const handleIncremented = () => {
        if (quantity < stock) {
            setQuantity((prev) => prev + 1);
        }
    }

    useEffect(() => {
        setTotalPrice((prev) => prev + (quantity * price))
    }, [quantity])

    return (
        <div className="flex flex-col items-center mb-2 bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
            <img className="p-4 h-50 w-1/2" src={produit1} alt={name} />
            <div className="flex flex-col justify-between p-4 leading-normal">
                <p className="mb-2 tracking-tight text-gray-900">{name}</p>
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