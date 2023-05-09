import Card from "../@shared/components/Card";
import List from "../@shared/components/List";
import Navlink from "../@shared/components/Navlink";
import CarrouselComponent from "../@shared/components/CarrouselComponent";
import PannierComponents from "../@shared/components/PannierComponents";

import "./../@assets/css/home.css"

import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { CHANGE_CATEGORY } from "../redux/@shared/constant";

const Home = () => {
    const [all_categories, setAllCategories] = useState([]);
    const [dataCarousel, setDataCarousel] = useState([]);
    const temp_categories = [{ link: "/", text: "Tous les categories", active: true }]
    const data = useSelector((state) => state.market)
    const dispatch = useDispatch();

    useEffect(() => {
        data.products.forEach(({ category: old_category }) => {
            if (!temp_categories.some(({ text }) => text.charAt(0).toUpperCase() + old_category.substr(1, old_category.length) === old_category.charAt(0).toUpperCase() + old_category.substr(1, old_category.length))) {
                temp_categories.push({ link: old_category.toLowerCase().replace(" ", "-"), text: `${old_category.charAt(0).toUpperCase()}${old_category.substr(1, old_category.length)}`, active: false })
            }
        })
        setAllCategories(temp_categories)
        setDataCarousel(data.products)
    }, [])


    const all_component_products = data?.products.map((product, key) => (
        <Card key={key} product={product} />
    ))

    const handleChangeCategory = (selected_category) => {
        setAllCategories(old_all_category =>
            old_all_category.map(item => {
                let temp = { ...item, active: false }

                if (temp.text === selected_category) {
                    temp = { ...item, active: true }
                }
                return temp
            })
        )
        dispatch({ type: CHANGE_CATEGORY, payload: selected_category.charAt(0).toUpperCase() + selected_category.substr(1, selected_category.length) })

    }

    return (
        <div className="flex">
            <div className={data.panier.isShow ? "content_corp anim_corp_show_pannier" : "content_corp anim_corp_hide_pannier"}>

                <div className="content_top p-3">
                    <h3> Top 10 </h3>
                    <hr className="my-2" />
                    <CarrouselComponent dataCarousel={dataCarousel} />
                </div>

                <div className="container flex flex-wrap items-center justify-center mx-auto">
                    <div className="items-center justify-center hidden w-full md:flex md:w-auto md:order-1" id="mobile-menu-language-select">
                        <ul className="flex flex-col p-4 mt-4  md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white">
                            {all_categories && all_categories.map(({ link, text, active }, index) => <List key={index} id={index} children={<Navlink link={link} text={text} active={active} handleChangeCategory={handleChangeCategory} />} />)}
                        </ul>
                    </div>
                </div>

                <div className="content_global">
                    <div className="grid xlg:grid-cols-5 lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-2 xs:grid-cols-1 lg:gap-3 md:gap-2 sm:gap-4">
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