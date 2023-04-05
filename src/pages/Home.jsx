import Card from "../@shared/components/Card";
import List from "../@shared/components/List";
import Navlink from "../@shared/components/Navlink";

import "./../@assets/css/home.css"

import produit1 from "./../@assets/produit/image1.png"
import produit2 from "./../@assets/produit/image2.png"
import { FaShoppingCart } from "react-icons/fa";
import BuyOne from "../@shared/components/BuyOne";
import Carousel from "../@shared/components/Carousel";
import { useSelector } from "react-redux";
const Home = () => {
    const all_categories = [{ link: "/", text: "Tous les categories" }, { link: "baute", text: "Bauté" }, { link: "nformatique", text: "Informatique" }, { link: "sport", text: "Sport" }];
    const data = useSelector((state) => state.market)

    const all_component_products = data?.products.map((product, key) => (
        <Card key={key} product={product} />
    ))

    const all_component_in_panier = data?.panier.products.map((product, key) => (
        <BuyOne key={key} product={product} />
    ))

    return (
        <div className="flex">
            <div className="content_corp">

                <div className="content_top p-3">
                    <h3> Top 10 </h3>
                    <hr className="my-2" />
                    <Carousel image={produit2} name="Produit 2" />
                </div>

                <div className="container flex flex-wrap items-center justify-center mx-auto">
                    <div className="items-center justify-center hidden w-full md:flex md:w-auto md:order-1" id="mobile-menu-language-select">
                        <ul className="flex flex-col p-4 mt-4  md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white">
                            {all_categories && all_categories.map(({ link, text }, index) => <List key={index} id={index} children={<Navlink link={link} text={text} />} />)}
                        </ul>
                    </div>
                </div>

                <div className="content_global">
                    <div className="grid xlg:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1 lg:gap-3 md:gap-2 sm:gap-4">
                        {all_component_products && all_component_products}
                    </div>
                </div>
            </div>

            {all_component_in_panier.length > 0 &&

                (<div className="content_panier">
                    <div className="block h-full max-w-sm p-6 bg-white border border-gray-200 ">
                        <div className="content_title">
                            <FaShoppingCart />
                            <h1>Panier</h1>
                        </div>
                        <hr className="my-3" />

                        {all_component_in_panier}

                    </div>
                </div>)
            }


        </div>
    );
};

export default Home;