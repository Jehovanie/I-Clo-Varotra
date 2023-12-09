import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
	const navigate = useNavigate();
	useEffect(() => {
		if (!localStorage.getItem("user")) {
			navigate("/admin/signin");
		}
	}, []);
	return (
		<div>
			<h1> this is the admin dashboard</h1>
		</div>
	);
};

export default Dashboard;
