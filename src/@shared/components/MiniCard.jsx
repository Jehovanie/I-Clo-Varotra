import Carousel from "better-react-carousel";
import produit1 from "./../../@assets/produit/image1.png"

const MiniCard = ({ data }) => {
    const { image, name } = data;
    return (
        <Carousel.Item >
            <div className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                <img className="object-cover w-full rounded-lg h-96 md:h-auto  md:rounded-none md:rounded-l-lg" src={produit1} alt={name} />
            </div>
        </Carousel.Item>
    );
};

export default MiniCard;