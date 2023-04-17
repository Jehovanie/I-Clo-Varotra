import Card from "../@shared/components/Card";
import List from "../@shared/components/List";
import Navlink from "../@shared/components/Navlink";

import "./../@assets/css/home.css"

import produit2 from "./../@assets/produit/image2.png"
import Carousel from "../@shared/components/Carousel";
import { useSelector } from "react-redux";
import PannierComponents from "../@shared/components/PannierComponents";

const Home = () => {
    const all_categories = [{ link: "/", text: "Tous les categories" }, { link: "baute", text: "Bauté" }, { link: "informatique", text: "Informatique" }, { link: "sport", text: "Sport" }];
    const data = useSelector((state) => state.market)

    const all_component_products = data?.products.map((product, key) => (
        <Card key={key} product={product} />
    ))
    return (
        <div className="flex">
            <div className={data.panier.isShow ? "content_corp anim_corp_show_pannier" : "content_corp anim_corp_hide_pannier"}>

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

            <div className={data.panier.isShow ? "content_panier anim_show_panier" : "content_panier anim_hide_panier"}>
                <PannierComponents />
            </div>


        </div>
    );
};

export default Home;