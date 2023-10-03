import React from 'react';

function AfterNavbar() {
    return (
        <div className='px-5 py-3 z-10 w-full bg-gray-200 '>
            <nav className='flex justify-between items-center max-container'>
                <div className='block w-3/12'>
                    <select id="countries" defaultValue={"Toutes categories"} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        <option>Category 1</option>
                        <option>Category 2</option>
                        <option>Category 3</option>
                        <option>Category 4</option>
                    </select>
                </div>
                
                <div className='text-lg leading-normal font-montserrat max-lg:hidden w-3/5'>
                    <ul className="flex gap-2 justify-start items-center max-containe gap-4"> 
                        <li> <a href="#" className='font-montserrat leading-normal font-normal text-gray-500 text-base'> Home  </a></li>
                        <li> <a href="#" className='font-montserrat leading-normal font-normal text-gray-500 text-base'> All Brands  </a></li>
                        <li> <a href="#" className='font-montserrat leading-normal font-normal text-gray-500 text-base'> Discount Products  </a></li>
                        <li> <a href="#" className='font-montserrat leading-normal font-normal text-gray-500 text-base'> All Sellers </a></li>
                        <li> <a href="#" className='font-montserrat leading-normal font-normal text-gray-500 text-base'> Seller Zone </a></li>
                    </ul>
                </div>
                {/* // text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-md px-5 py-2.5 mr-2 mb-2 dark:focus:ring-yellow-900" */}
            </nav>
        </div>
    );
}

export default AfterNavbar;