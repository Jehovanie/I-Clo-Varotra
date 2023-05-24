import logo from "./../@assets/logo.png"
import { Link, useNavigate } from 'react-router-dom';

import "./../@assets/css/auth.css"
import { useForm } from "react-hook-form";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { actionSignup } from "../@service/actions/auth";

const Signup = () => {
    const [errors, handleError] = useState({ firstname: false, lastname: false, email: false, password: false, adress: false, })
    const { register, handleSubmit } = useForm();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const onSubmit = (data) => {
        const { password, confirm_password } = data;

        if (password !== confirm_password) {
            handleError(prev => ({ ...prev, password: true }))
        } else {

            const { firstname, lastname, email } = data;
            if (firstname === "") {
                handleError(prev => ({ ...prev, firstname: true }))
            }
            if (lastname === "") {
                handleError(prev => ({ ...prev, lastname: true }))
            }
            if (email === "") {
                handleError(prev => ({ ...prev, email: true }))
            }

            console.log(data)
            dispatch(actionSignup(data, navigate));
        }
    }

    return (
        <div className="content_global">
            <div className="left">
                <section className="bg-gray-50 dark:bg-gray-900">
                    <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                        <Link to="/" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
                            <img src={logo} className="h-6 mr-3 sm:h-9" alt="Flowbite Logo" />
                        </Link>
                        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                                <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                                    Sign up to your account
                                </h1>
                                <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit(onSubmit)}>
                                    <div className="none">
                                        <div className="flex mb-2">
                                            <div className="w-1/2  sm:w-full bg-white">
                                                <label htmlFor="firstname" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Firstname</label>
                                                <input type="firstname" {...register("firstname", { required: true })} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required={true} />
                                            </div>
                                            <div className="w-1/2 mx-2 sm:w-full bg-white">
                                                <label htmlFor="lastname" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Lastname</label>
                                                <input type="lastname" {...register("lastname", { required: true })} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required={true} />
                                            </div>
                                        </div>
                                        <div className="flex mb-2">
                                            <div className="w-1/2  sm:w-full bg-white">
                                                <label htmlFor="address" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Adresse</label>
                                                <input type="address" {...register("address", { required: true })} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required={true} />
                                            </div>
                                            <div className="w-1/2 mx-2 sm:w-full bg-white">
                                                <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Phone Number</label>
                                                <input type="phone" {...register("phone", { required: true })} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required={true} />
                                            </div>
                                        </div>
                                        <div className="flex mb-2">
                                            <div className="w-1/2 sm:w-full bg-white">
                                                <label htmlFor="country" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Country</label>
                                                <input type="country" {...register("country", { required: true, value: 'MADAGASCAR' })} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required={true} />
                                            </div>
                                            <div className="w-1/2 mx-2 sm:w-full bg-white">
                                                <label htmlFor="state" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">State</label>
                                                <input type="state" {...register("state", { required: true, value: "MGA" })} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required={true} />
                                            </div>
                                        </div>
                                        <div className="flex mb-2">
                                            <div className="w-1/2 sm:w-full bg-white">
                                                <label htmlFor="city" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">City</label>
                                                <input type="city" {...register("city", { required: true, value: "Ambohidratrimo" })} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required={true} />
                                            </div>
                                            <div className="w-1/2 mx-2  sm:w-full bg-white">
                                                <label htmlFor="code_postal" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Code Postal</label>
                                                <input type="code_postal" {...register("code_postal", { required: true, value: 105 })} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required={true} />
                                            </div>

                                        </div>

                                    </div>
                                    <div>
                                        <div>
                                            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                                            <input type="email" {...register("email", { required: true })} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required={true} />
                                        </div>
                                        <div>
                                            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                            <input type="password" {...register("password", { required: true })} placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required={true} />
                                        </div>

                                        <div>
                                            <label htmlFor="confirm_password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm Password</label>
                                            <input type="password" {...register("confirm_password", { required: true })} placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required={true} />
                                        </div>
                                        <button type="submit" className="w-full btn_connection hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Sign up</button>
                                    </div>
                                    <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                        Already have an account? <Link to="/admin/signin" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Signin</Link>
                                    </p>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <div className="right">

            </div>
        </div>
    );
};

export default Signup;