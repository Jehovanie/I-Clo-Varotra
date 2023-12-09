import { createBrowserRouter } from "react-router-dom";

import Details from "../../@shared/components/Details";
import App from "../App";
import Signin from "../auth/Signin";
import Signup from "../auth/Signup";
import Dashboard from "../private/Dashboard";
import Baute from "../public/Baute";
import Home from "../public/Home";
import Sport from "../public/Sport";
import Technologie from "../public/Technologie";

// const router = createBrowserRouter([
// 	{
// 		path: "/",
// 		element: <App />,
// 		children: [
// 			{
// 				index: true,
// 				element: <Home />,
// 			},
// 			{
// 				path: "baute",
// 				element: <Baute />,
// 				children: [
// 					{
// 						path: "details/:bauteId",
// 						element: <Details />,
// 					},
// 				],
// 			},
// 			{
// 				path: "informatique",
// 				element: <Technologie />,
// 			},
// 			{
// 				path: "sport",
// 				element: <Sport />,
// 			},
// 		],
// 	},
// 	{
// 		path: "admin",
// 		children: [
// 			{
// 				index: true,
// 				element: <Signin />,
// 			},
// 			{
// 				path: "signin",
// 				element: <Signin />,
// 			},
// 			{
// 				path: "signup",
// 				element: <Signup />,
// 			},
// 			{
// 				path: "dashboard",
// 				element: <Dashboard />,
// 			},
// 		],
// 	},
// ]);

const router = createBrowserRouter([
	{
		path: "/",
		element: <Home />,
		// errorElement: <NotFound />,
	}
]);

export default router;
