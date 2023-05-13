import Carousel from 'better-react-carousel';
import produit1 from "./../../@assets/produit/image1.png";

import "./../../@assets/css/carousel.css"
import ModalDetails from './ModalDetails';
import { useState } from 'react';

const CarrouselComponent = ({ dataCarousel }) => {
    const [dataModal, setDataModal] = useState({ id: null, category: null, titre: null, description: null, origin: null, fournisseur: null, stock: null, price: null, image: null, note: null });
    const setModalState = (indexData) => {
        setDataModal(dataCarousel.find((item, index) => {
            if (indexData === index) {
                return item
            }
        }))
    }

    const jsx_carousel = dataCarousel.map((item, index) => (
        <Carousel.Item key={index} >
            <div data-modal-target={"defaultModal_" + item.id} data-modal-toggle={"defaultModal_" + item.id} onClick={() => setModalState(index)} className="content_image_carrousel bg-white border border-gray-200 rounded-lg shadow md:flex-row hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                <img className="object-cover w-full rounded-lg md:h-auto  md:rounded-none md:rounded-l-lg" src={produit1} alt={item.name} />
            </div>
        </Carousel.Item>
    ))

    return (
        <div className="content_carrousel">
            <Carousel cols={6} rows={1} gap={10} loop={true} scrollSnap={false} showDots={true}>
                {jsx_carousel}
            </Carousel>
            <ModalDetails product={dataModal} />
        </div>
    );
};

export default CarrouselComponent;