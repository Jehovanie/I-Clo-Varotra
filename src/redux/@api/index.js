import axios from "axios";
import { API } from "../@shared/constant";

const url = axios.create({ baseURL: API })
url.interceptors.request.use((req) => {
    if (localStorage.getItem("user")) {
        req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem("user").token)}`
    }
    return req;
})


export const login = (form_data) => url.post("/siging")