import { login, signup } from "../@api/index";
import { SIGNUP } from "../@shared/constant";
import { LOGIN } from "../@shared/constant";

export const actionLogin = (formData, navigate) => async (dispatch) => {
    try {
        const { data } = await login(formData);
        dispatch({ type: LOGIN, payload: data.data })
        navigate("/admin/dashboard")
    } catch (error) {
        console.log(error)
    }
}


export const actionSignup = (formData, navigate) => async (dispatch) => {
    try {
        const { data } = await signup(formData);
        dispatch({ type: SIGNUP, payload: data.data });
        // navigate("/")
    } catch (error) {
        console.log(error)
    }
}