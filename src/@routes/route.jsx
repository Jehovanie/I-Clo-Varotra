import { createBrowserRouter } from "react-router-dom";
import Details from "../@shared/components/Details";
import App from "../App";
import Baute from "../pages/Baute";
import Home from "../pages/Home";
import Sport from "../pages/Sport";
import Technologie from "../pages/Technologie";


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
    }
])

export default router;