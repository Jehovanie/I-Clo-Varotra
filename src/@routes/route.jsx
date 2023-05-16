import { createBrowserRouter } from "react-router-dom";
import Details from "../@shared/components/Details";
import App from "../App";
import Baute from "../pages/public/Baute";
import Home from "../pages/public/Home";
import Sport from "../pages/public/Sport";
import Technologie from "../pages/public/Technologie";

import Signin from "../pages/Signin";
import Signup from "../pages/Signup";
import Dashboard from "../pages/private/Dashboard";


const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                index: true, element: <Home />
            },
            {
                path: "baute",
                element: <Baute />,
                children: [
                    {
                        path: "details/:bauteId",
                        element: <Details />
                    }
                ]
            },
            {
                path: "informatique",
                element: <Technologie />
            },
            {
                path: "sport",
                element: <Sport />
            }
        ]
    },
    {
        path: "admin",
        children: [
            {
                index: true, element: <Signin />
            },
            {
                path: "signin",
                element: <Signin />
            },
            {
                path: "signup",
                element: <Signup />
            },
            {
                path: "dashboard",
                element: <Dashboard />
            }
        ]
    }
])

export default router;