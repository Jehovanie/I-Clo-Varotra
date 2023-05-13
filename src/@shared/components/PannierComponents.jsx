import React from 'react';
import { useSelector } from 'react-redux';
import BuyOne from './BuyOne';
import { FaShoppingCart } from 'react-icons/fa';

import "./../../@assets/css/pannier.css"


const PannierComponents = () => {

    const data = useSelector((state) => state.market)

    const all_component_in_panier = data?.panier.products.map((product, key) => (
        <BuyOne key={key} product={product} />
    ))

    return (
        <div className="panier_component max-w-sm p-6 bg-white border border-gray-200 ">
            <div className="content_title">
                <FaShoppingCart />
                <h1>Panier</h1>
            </div>
            <hr className="my-3" />
            {all_component_in_panier.length === 0 ? (<div>Nothing for now!!!</div>) : (
                <>
                    <div className='list_products_panier'>

                        {all_component_in_panier}

                    </div>
                    <div className="flex items-center justify-between content_tow_cta_panier">
                        <button className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-small rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">
                            Total {data.panier.total}€
                        </button>
                        <button className="block text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-xl p-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">
                            Go to pay
                        </button>
                    </div>
                </>
            )}

        </div>
    );
};

export default PannierComponents;