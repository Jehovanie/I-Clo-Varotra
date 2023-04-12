import React from 'react';
import { useSelector } from 'react-redux';
import BuyOne from './BuyOne';
import { FaShoppingCart } from 'react-icons/fa';

const PannierComponents = () => {

    const data = useSelector((state) => state.market)

    const all_component_in_panier = data?.panier.products.map((product, key) => (
        <BuyOne key={key} product={product} />
    ))

    return (
        <div className="block h-full max-w-sm p-6 bg-white border border-gray-200 ">
            <div className="content_title">
                <FaShoppingCart />
                <h1>Panier</h1>
            </div>
            <hr className="my-3" />
            {all_component_in_panier.length === 0 ? (<div>Nothing for now!!!</div>) : (all_component_in_panier)}
        </div>
    );
};

export default PannierComponents;