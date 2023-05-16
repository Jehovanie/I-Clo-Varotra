import logo from "./../@assets/logo.png"
import { Link } from 'react-router-dom';

import "./../@assets/css/auth.css"
import { useForm } from "react-hook-form";

const Signup = () => {
    const { register, handleSubmit } = useForm();

    const onSubmit = (data) => {
        const { password, comfirm_password } = data;
        if (password === comfirm_password) {
            console.log("Go to next step")
        } else {

            console.log("train here")
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
                                    <div>
                                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                                        <input type="email" {...register("email", { required: true })} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required={true} />
                                    </div>
                                    <div>
                                        <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                        <input type="password" {...register("password", { required: true })} placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required={true} />
                                    </div>
                                    <div>
                                        <label htmlFor="comfirm_password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Comfirm Password</label>
                                        <input type="password" {...register("comfirm_password", { required: true })} placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required={true} />
                                    </div>
                                    <button type="submit" className="w-full btn_connection hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Sign up</button>
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