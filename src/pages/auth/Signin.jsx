import logo from "./../../assets/logo.png";
import "./../../assets/css/auth.css";

import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { actionLogin } from "../../@service/actions/auth";

const Signin = () => {
	const { register, handleSubmit } = useForm();
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const onSubmit = (data) => {
		dispatch(actionLogin(data, navigate));
	};
	return (
		<div className="content_global">
			<div className="left">
				<section className="bg-gray-50 dark:bg-gray-900">
					<div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
						<Link
							to="/"
							className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
							<img src={logo} className="md:h-45 sm:h-20 h-20 mr-3" alt="E-clo-varotra" />
						</Link>
						<div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
							<div className="p-6 space-y-4 md:space-y-6 sm:p-8">
								<h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
									Sign in to your account
								</h1>
								<form className="space-y-4 md:space-y-6" onSubmit={handleSubmit(onSubmit)}>
									<div>
										<label
											htmlFor="email"
											className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
											Your email
										</label>
										<input
											type="email"
											{...register("email", { required: true })}
											className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
										/>
									</div>
									<div>
										<label
											htmlFor="password"
											className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
											Password
										</label>

										<input
											type="password"
											{...register("password", { required: true })}
											autoComplete="true"
											className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
										/>
									</div>
									<div className="flex items-center justify-between">
										<div className="flex items-start">
											<div className="flex items-center h-5">
												<input
													id="remember"
													{...register("remember_me")}
													aria-describedby="remember"
													type="checkbox"
													className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
												/>
											</div>
											<div className="ml-3 text-sm">
												<label htmlFor="remember" className="text-gray-500 dark:text-gray-300">
													Remember me
												</label>
											</div>
										</div>
										<a
											href="#"
											className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">
											Forgot password?
										</a>
									</div>
									<button
										type="submit"
										className="w-full btn_connection hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
										Sign in
									</button>
									<p className="text-sm font-light text-gray-500 dark:text-gray-400">
										Don't have an account yet?{" "}
										<Link
											to="/admin/signup"
											className="font-medium text-primary-600 hover:underline dark:text-primary-500">
											Sign up
										</Link>
									</p>
								</form>
							</div>
						</div>
					</div>
				</section>
			</div>
			<div className="right"></div>
		</div>
	);
};

export default Signin;
