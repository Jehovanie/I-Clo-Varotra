import Carousel from 'better-react-carousel';
import ItemDiscount from './ItemDiscount';

const Carrousel = () => {
    
    const dataCarousel= "jehovanie".split("");
    const jsx_carousel = dataCarousel.map((item, index) => (
        <Carousel.Item key={index} >
            <ItemDiscount />
        </Carousel.Item>
    ))
    return (
        <div className='flex justify-center items-center w-full'>
            <Carousel cols={4} rows={1} gap={10} loop={false} scrollSnap={true} showDots={true}>
                {jsx_carousel}
            </Carousel>
        </div>
    );
};

export default Carrousel;