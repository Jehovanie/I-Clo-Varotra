import Card from "../../@shared/components/Card";
import List from "../../@shared/components/List";
import Navlink from "../../@shared/components/Navlink";
import CarrouselComponent from "../../@shared/components/CarrouselComponent";
import PannierComponents from "../../@shared/components/PannierComponents";
import produit1 from "./../../@assets/produit/image1.png";

import "./../../@assets/css/home.css"
import NavbarGlobal from "../../@shared/component-group/NavbarGlobal";
import AllType from "../../@shared/components/AllType";
import FlashDeal from "../../@shared/components/FlashDeal";
import Carrousel from "../../@shared/components/Carrousel";

// import { useDispatch, useSelector } from "react-redux";
// import { useEffect, useState } from "react";
// import { CHANGE_CATEGORY } from "../../@service/@shared/constant";
// import NavbarGlobal from "../../@shared/component-group/NavbarGlobal";

const Home = () => {
    // const [all_categories, setAllCategories] = useState([]);
    // const [dataCarousel, setDataCarousel] = useState([]);
    // const temp_categories = [{ link: "/", text: "Tous les categories", active: true }]
    // const data = useSelector((state) => state.market)
    // const dispatch = useDispatch();

    // useEffect(() => {
    //     data.products.forEach(({ category: old_category }) => {
    //         if (!temp_categories.some(({ text }) => text.charAt(0).toUpperCase() + old_category.substr(1, old_category.length) === old_category.charAt(0).toUpperCase() + old_category.substr(1, old_category.length))) {
    //             temp_categories.push({ link: old_category.toLowerCase().replace(" ", "-"), text: `${old_category.charAt(0).toUpperCase()}${old_category.substr(1, old_category.length)}`, active: false })
    //         }
    //     })
    //     setAllCategories(temp_categories)
    //     setDataCarousel(data.products)
    // }, [temp_categories])


    // const all_component_products = data?.products.map((product, key) => (
    //     <Card key={key} product={product} />
    // ))

    // const handleChangeCategory = (selected_category) => {
    //     setAllCategories(old_all_category =>
    //         old_all_category.map(item => {
    //             let temp = { ...item, active: false }

    //             if (temp.text === selected_category) {
    //                 temp = { ...item, active: true }
    //             }
    //             return temp
    //         })
    //     )
    //     dispatch({ type: CHANGE_CATEGORY, payload: selected_category.charAt(0).toUpperCase() + selected_category.substr(1, selected_category.length) })

    // }

    return (
        <>
           <NavbarGlobal />

            <div className="block mx-5">
                {/* <div className={data.panier.isShow ? "content_corp anim_corp_show_pannier" : "content_corp anim_corp_hide_pannier"}> */}
                <div className="w-full h-[350px] overflow-y-hidden">

                    <div className="w-full h-full flex justify-start items-start">
                        <div className="block h-full w-3/12">
                            <AllType />
                        </div>
                        <div className="block w-9/12 h-full">
                            <div className="flex justify-between items-center h-full">
                                <div className="block mt-2 w-[15px] h-4/5">
                                    <div className="h-full w-full ml-2 bg-blue-500 rounded-tl-md rounded-bl-md"></div>
                                </div>
                                <div className="flex justify-between items-center w-full">
                                    <div className="w-1/3 flex justify-center items-center">
                                        <div>
                                            <div className="block rounded-full border p-3 text-center border-blue-400 select-none">
                                                <div className="block rounded-full border p-3 text-center border-blue-400">
                                                    <div className="block rounded-full border p-5 text-center border-blue-500">
                                                        <p className="text-red-400 text-xl font-extrabold">70%</p>
                                                        <h2 className="text-red-600 text-4xl font-extrabold ">OFF</h2>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex justify-between items-center w-2/3">
                                        <div className="block w-1/2">
                                            <img className="p-8 rounded-t-lg" src={produit1} alt={name} />
                                        </div>
                                        <div className="block w-1/2">
                                            <div>
                                                <h5 className="text-blue-500 font-bold text-2xl">Your</h5>
                                                <h3 className="text-blue-500 font-extrabold text-3xl"> Favourite </h3>
                                                <h3 className="text-blue-500 font-extrabold text-3xl"> Collection</h3> <br />
                                            </div>

                                            <div>
                                                <p>
                                                    Change your test and switch <br /> in your style.
                                                </p>
                                                <button type='button' className='flex break-inside bg-yellow-300 text-white rounded-3xl px-4 py-3 mt-2'>
                                                    <div className='m-auto'>
                                                        <div className='flex items-center justify-start flex-1 space-x-4'>
                                                            <span className='font-medium mb-[-2px]'>Shop It Now</span>
                                                        </div>
                                                    </div>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="w-full h-full flex justify-center items-center gap-3">
                    <div className="block w-1/4">
                        <FlashDeal />
                    </div>
                    <div className="block w-3/4">
                        <Carrousel />
                    </div>
                </div>

                {/* <div className={data.panier.isShow ? "content_panier anim_show_panier" : "content_panier anim_hide_panier"}>
                    <PannierComponents />
                </div> */}

                {/* <div id="popup-modal" tabIndex="-1" className="fixed top-0 left-0 right-0 z-50 hidden p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full">
                    <div className="relative w-full max-w-md max-h-full">
                        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                            <button type="button" className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white" data-modal-hide="popup-modal">
                                <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                                <span className="sr-only">Close modal</span>
                            </button>
                            <div className="p-6 text-center">
                                <svg aria-hidden="true" className="mx-auto mb-4 text-gray-400 w-14 h-14 dark:text-gray-200" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">Are you sure you want to delete this product?</h3>
                                <button data-modal-hide="popup-modal" type="button" className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2">
                                    Yes, I'm sure
                                </button>
                                <button data-modal-hide="popup-modal" type="button" className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">No, cancel</button>
                            </div>
                        </div>
                    </div>
                </div> */}

            </div>
        </>
    );
};

export default Home;