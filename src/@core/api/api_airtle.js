import axios from 'axios';
import { API_AIRTEL_CLIENT_ID, API_AIRTEL_CLIENT_SECRET, API_URL } from "../../@shared/constant/api"
/**
 * this call to the back
 */

const API_AIRTEL_URL = axios.create({ baseURL: API_URL, mode: 'no-cors' })

// API.interceptors.request.use((req) => {

//     if (localStorage.getItem('profile')) {

//         ///setting the header to put the all data like:
//         req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem("profile")).token}`;
//     }
//     return req;
// })


// { "order_id": 1, "total_amount": 500, "msisdn": 333005838 }
// export const handlePayment = (payload) => {
//     console.log(payload)
//     const jwt_token = "";
//     API_AIRTEL_URL.post("/auth/oauth2/token", {
//         "client_id": API_AIRTEL_CLIENT_ID,
//         "client_secret": API_AIRTEL_CLIENT_SECRET,
//         "grant_type": "client_credentials"

//     }, { 'Content-Type': 'application/json', 'Accept': 'application/json', 'Origin': 'http://127.0.0.1:5173' })
//         .then(response => response.json())
//         .then(response => {
//             console.log(response)
//         })
//         .catch(error => console.log(error))


//     const hearder_content = {
//         headers: {
//             'Content-Type': 'application/json',
//             'X-Country': "MG",
//             'X-Currency': "MGA",
//             'Authorization': `Bearer ${jwt_token}`
//         }
//     };
//     const data = {
//         "reference": "Testing transaction",
//         "subscriber": {
//             "country": "MG",
//             "currency": "MGA",
//             "msisdn": 333005838
//         },
//         "transaction": {
//             "amount": 500,
//             "country": "MG",
//             "currency": "MGA",
//             "id": "azerazerazefvervrtevaeraretrrrr"
//         }
//     }
//     // API_AIRTEL_URL.post("/merchant/v1/payments", data, hearder_content)
//     //     .then(response => response.json())
//     //     .then(response => {
//     //         console.log(response)
//     //     })

//     return { type: "PAYMENT", payload: "ok" }
// }

export const handlePayment = (payload) => {


    const inputBody = {
        "client_id": API_AIRTEL_CLIENT_ID,
        "client_secret": API_AIRTEL_CLIENT_SECRET,
        "grant_type": "client_credentials"
    };
    const headers = {
        'Content-Type': 'application/json',
        'Accept': '*/*'
    };

    fetch('https://openapiuat.airtel.africa/auth/oauth2/token',
        {
            method: 'POST',
            body: inputBody,
            headers: headers
        })
        .then(function (res) {
            console.log(res)
            return res.json();
        }).then(function (body) {
            console.log(body);
        });

    return { type: "PAYMENT", payload: "ok" }
}