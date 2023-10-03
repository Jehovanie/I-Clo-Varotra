import produit1 from "./../../@assets/produit/image1.png"


const ItemDiscount = () => {
    return (
        <div className='block w-full p-0'>
            <div className='w-full mb-0 '> 
               <h5 className='text-white font-medium font-semibold'>20%</h5> 
            </div>
            <div className='flex items-center justify-evenly gap-3'>
                <div className="block w-1/4">
                    <img className="w-full" src={produit1} alt="Image Carousel" />
                </div>
                <div className="block w-3/4">
                    <p className="leading-4">
                        Lorem ipsum dolor sit amet. <br />
                        Lorem ipsum... <br />
                        ipsum
                    </p>
                    <div>
                        etoile
                    </div>
                    <div>
                        <p className="font-thin line-through text-red-500"> $ 1.673.6000</p>
                        <h3 className="font-extrabold text-md text-blue-600"> $ 1.873.000</h3>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ItemDiscount;