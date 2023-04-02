import { NavLink } from "react-router-dom";
import Card from "../@shared/components/Card";
import List from "../@shared/components/List";
import Navlink from "../@shared/components/Navlink";

import "./../@assets/css/home.css"

import produit1 from "./../@assets/produit/image1.png"
import produit2 from "./../@assets/produit/image2.png"
const Home = () => {
    const all_categories = [{ link: "/", text: "Tous les categories" }, { link: "baute", text: "Bauté" }, { link: "nformatique", text: "Informatique" }, { link: "sport", text: "Sport" }]
    return (
        <div>
            <div className="container flex flex-wrap items-center justify-center mx-auto">
                <div className="items-center justify-center hidden w-full md:flex md:w-auto md:order-1" id="mobile-menu-language-select">
                    <ul className="flex flex-col p-4 mt-4  md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white">
                        {all_categories && all_categories.map(({ link, text }, index) => <List key={index} id={index} children={<Navlink link={link} text={text} />} />)}
                    </ul>
                </div>
            </div>

            <div className="content_global">
                <div className="grid xlg:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1 lg:gap-3 md:gap-2 sm:gap-4">
                    <Card image={produit1} name="Lorem Impsum" description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis quas optio nam perferendis possimus, soluta odio accusantium illo assumenda id quaerat minima dolor omnis vero delectus praesentium! Ex, tenetur amet" note={2} price={150} />
                    <Card image={produit1} name="Lorem Impsum" description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis quas optio nam perferendis possimus, soluta odio accusantium illo assumenda id quaerat minima dolor omnis vero delectus praesentium! Ex, tenetur amet" note={3.1} price={150} />
                    <Card image={produit1} name="Lorem Impsum" description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis quas optio nam perferendis possimus, soluta odio accusantium illo assumenda id quaerat minima dolor omnis vero delectus praesentium! Ex, tenetur amet" note={5.1} price={150} />
                    <Card image={produit1} name="Lorem Impsum" description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis quas optio nam perferendis possimus, soluta odio accusantium illo assumenda id quaerat minima dolor omnis vero delectus praesentium! Ex, tenetur amet" note={4.1} price={150} />
                    <Card image={produit2} name="Lorem Impsum" description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis quas optio nam perferendis possimus, soluta odio accusantium illo assumenda id quaerat minima dolor omnis vero delectus praesentium! Ex, tenetur amet" note={3.1} price={150} />
                    <Card image={produit2} name="Lorem Impsum" description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis quas optio nam perferendis possimus, soluta odio accusantium illo assumenda id quaerat minima dolor omnis vero delectus praesentium! Ex, tenetur amet" note={5.1} price={150} />
                    <Card image={produit2} name="Lorem Impsum" description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis quas optio nam perferendis possimus, soluta odio accusantium illo assumenda id quaerat minima dolor omnis vero delectus praesentium! Ex, tenetur amet" note={5.1} price={150} />
                    <Card image={produit2} name="Lorem Impsum" description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis quas optio nam perferendis possimus, soluta odio accusantium illo assumenda id quaerat minima dolor omnis vero delectus praesentium! Ex, tenetur amet" note={1.1} price={150} />
                </div>
            </div>
        </div >
    );
};

export default Home;