import { LOGIN, LOGOUT, SIGNUP } from "../@shared/constant";

const auth = (state = { auth_data: null }, action) => {
    switch (action.type) {
        case LOGIN:
            if (action?.payload.token) {
                localStorage.setItem("user", JSON.stringify(action.payload.token))
            }
            return { ...state, auth_data: action.payload }

        case LOGOUT:
            localStorage.clear();
            return { ...state, auth_data: null }

        case SIGNUP:
            console.log(action.payload)
            if (action?.payload.token) {
                localStorage.setItem("user", JSON.stringify(action.payload.token))
            }
            return { ...state, auth_data: action.payload }

        default:
            return { ...state }
    }
}

export default auth;