import { configureStore } from "@reduxjs/toolkit";

import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./index.css";

import { Provider } from "react-redux";
import reducer from "./@service/reducers/index";
import Home from "./pages/public/Home";
import App from "./pages/App";
import Baute from "./pages/public/Baute";
import Details from "./@shared/components/Details";
import Technologie from "./pages/public/Technologie";
import Sport from "./pages/public/Sport";
import Signin from "./pages/auth/Signin";
import Signup from "./pages/auth/Signup";
import Dashboard from "./pages/private/Dashboard";
// import router from "./pages/@routes/router";

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		children: [
			{
				index: true,
				element: <Home />,
			},
			{
				path: "baute",
				element: <Baute />,
				children: [
					{
						path: "details/:bauteId",
						element: <Details />,
					},
				],
			},
			{
				path: "informatique",
				element: <Technologie />,
			},
			{
				path: "sport",
				element: <Sport />,
			},
		],
	},
	{
		path: "admin",
		children: [
			{
				index: true,
				element: <Signin />,
			},
			{
				path: "signin",
				element: <Signin />,
			},
			{
				path: "signup",
				element: <Signup />,
			},
			{
				path: "dashboard",
				element: <Dashboard />,
			},
		],
	},
]);

const store = configureStore({ reducer });

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<Provider store={store}>
			<RouterProvider router={router} />
		</Provider>
	</React.StrictMode>
);
