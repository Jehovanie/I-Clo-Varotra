import React from 'react';

function BeforeNavBar(props) {
    return (
        <header className='px-5  z-10 w-full'>
            <nav className='flex justify-between items-center max-container'>
                <a href='/'>
                    (+261) 34 79 476 16
                </a>
                
                <div className='flex gap-2 text-lg leading-normal font-medium font-montserrat max-lg:hidden wide:mr-24'>
                    <select name="select_unit_price" id="id_unit_price" defaultValue={"MGA"} className='border-none text-md font-bolder focus:white focus:white'> 
                        <option value="MGA">MGA </option>
                        <option value="USA"> USA</option>
                        <option value="USD"> USD</option>
                    </select>

                    <select name="select_nation_name" id="id_nation_name" className='border-none text-md font-bolder'>
                        <option value="Madagascar"> Madagascar</option>
                        <option value="Etas-Unies"> Nation-Unis</option>
                        <option value="Canada"> Canada </option>
                    </select>
                </div>
                {/* // text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-md px-5 py-2.5 mr-2 mb-2 dark:focus:ring-yellow-900" */}
            </nav>
        </header>
    );
}

export default BeforeNavBar;