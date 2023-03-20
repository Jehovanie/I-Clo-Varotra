import { HOME, TEST } from "../@shared/constant";

const globalActions = (state = { "message": "Jehovanie, You must winner!" }, action) => {

    switch (action.type) {
        case HOME:
            return { ...state }
        case TEST:
            return { ...state, "message": "Jehovanie, Never give up!!! " }
        default:
            return { ...state }
    }
}


export default globalActions;