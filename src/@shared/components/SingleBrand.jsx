import React from 'react';

import img_default_brand from '../../@assets/brand_default.jpg'

const SingleBrand = ({ text , image }) => {
    console.log(text)
    console.log(image)
    return (
        <div className='w-[80px] h-[80px] mr-2'>
            <div className='w-full h-full rounded-full overflow-hidden'>
                <img className='w-full h-full' src={img_default_brand} alt="Default Brand image" />
            </div>
        </div>
    );
};

export default SingleBrand;