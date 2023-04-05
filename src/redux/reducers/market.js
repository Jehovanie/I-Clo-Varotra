import { dataFake } from "../../@utils/dataFake";
import { ADD_TO_PANIER, HOME, TEST } from "../@shared/constant";


const market = (state = { "massage": "E-clo-varotra", panier: { products: [], total: 0 }, products: dataFake }, action) => {

    switch (action.type) {
        case HOME:
            return { ...state }
        case TEST:
            return { ...state, "message": "test" }
        case ADD_TO_PANIER:
            if (state.panier.products.some(({ id, category }) => id === action.payload.id && category === action.payload.category)) {
                return { ...state }
            }
            return { ...state, panier: { ...state.panier, products: [...state.panier.products, state.products.find(({ id, category }) => id === action.payload.id && category === action.payload.category)] } }
        default:
            return { ...state }
    }
}


export default market;