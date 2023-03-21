import { HOME, TEST } from "../@shared/constant";

const globalActions = (state = { "message": "Jehovanie, first project:!" }, action) => {

    switch (action.type) {
        case HOME:
            return { ...state }
        case TEST:
            return { ...state, "message": "E-clo-varotra" }
        default:
            return { ...state }
    }
}


export default globalActions;