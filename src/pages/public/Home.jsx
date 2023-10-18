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
import Brand from "../../@shared/component-group/Brand";

const Home = () => {


    return (
        <>
           <NavbarGlobal />

            <div className="block mx-5">
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
                                            <div className="block rounded-full border p-3 text-center border-blue-400 select-none animate-ping">
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
                <div className="w-full h-full">
                    <Brand />
                </div>
            </div>
        </>
    );
};

export default Home;