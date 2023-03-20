import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import Signin from "../pages/Signin";
import Signup from "../pages/Signup";
import home from "./loaders/home";


const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                index: true, element: <Home />
            },
            {
                path: "signin",
                element: <Signin />,
            },
            {
                path: "signup",
                element: <Signup />
            }
        ]
    }
])

export default router;