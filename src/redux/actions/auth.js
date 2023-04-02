import { login } from "../@api/index";

export const login = (dispatch, data) => async (dispatch) => {
    try {
        const { data } = await login(data);
    } catch (error) {

    }
}