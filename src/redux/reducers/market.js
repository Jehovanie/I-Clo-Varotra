import { dataFake } from "../../@utils/dataFake";
import { ADD_TO_PANIER, TOGGLE_PANIER, HOME, TEST, ADD_QUANTITY, DEL_QUANTITY, CANCEL_BUY, CHANGE_CATEGORY } from "../@shared/constant";
import { calculTotalAmount } from "../actions/market";


const market = (state = { "massage": "E-clo-varotra", panier: { isShow: false, products: [], total: 0 }, default_products: dataFake, products: dataFake }, action) => {


    switch (action.type) {
        case HOME:
            return { ...state }
        case TEST:
            return { ...state, "message": "test" }

        case CHANGE_CATEGORY:
            if (action.payload !== "Tous les categories") {
                return { ...state, products: state.default_products.filter(item => item.category.charAt(0).toUpperCase() + item.category.substr(1, item.category.length) === action.payload) }
            }
            return { ...state, products: state.default_products }
        case ADD_TO_PANIER:
            if (!state.panier.products.some(({ id, category }) => id === action.payload.id && category === action.payload.category)) {
                var new_products = [...state.panier.products, { ...state.products.find(({ id, category }) => id === action.payload.id && category === action.payload.category), quantity: 1 }]
                return { ...state, panier: { ...state.panier, isShow: true, products: new_products, total: calculTotalAmount(new_products) } }
            }

        case ADD_QUANTITY:
            var new_panier = {
                ...state.panier,
                products: state.panier.products.map(item => {
                    if (item.id === action.payload.id && item.category === action.payload.category) {
                        return { ...item, quantity: item.quantity + 1 }
                    } else {
                        return item
                    }
                })
            }
            return { ...state, panier: { ...new_panier, total: calculTotalAmount(new_panier.products) } }

        case DEL_QUANTITY:
            var new_panier = {
                ...state.panier,
                products: state.panier.products.map(item => {
                    if (item.id === action.payload.id && item.category === action.payload.category) {
                        return { ...item, quantity: item.quantity - 1 }
                    } else {
                        return item
                    }
                })
            }
            return { ...state, panier: { ...new_panier, total: calculTotalAmount(new_panier.products) } }

        case CANCEL_BUY:
            console.log(state.panier.products)
            var new_panier = { ...state.panier, products: state.panier.products.filter(({ id, category }) => { return (id !== action.payload.id) || (category !== action.payload.category) }) }
            return { ...state, panier: { ...new_panier, isShow: !!new_panier.products.length, total: calculTotalAmount(new_panier.products) } }


        case TOGGLE_PANIER:
            return { ...state, panier: { ...state.panier, isShow: !state.panier.isShow } }
        default:
            return { ...state }
    }
}


export default market;