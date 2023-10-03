import React from 'react';

function FlashDeal() {
    return (
        <div className=' bg-blue-200 text-center p-4 w-full'>
            <h3 className='text-blue-600 text-xl font-bold mb-2'> FLASH DEAL </h3>
            <div className='bg-blue-500 text-white p-3 flex justify-center items-center w-full gap-2'>
                <div className='text-center p-2 rounded-md bg-blue-300 text-white font-bold mb-2'>
                    <h3 className='text-xl'>5</h3>
                    <p className='text-sm'> Day</p>
                </div>
                <div>:</div>
                <div className='text-center p-2 rounded-md bg-blue-300 text-white font-bold mb-2'>
                    <h3 className='text-xl'>2</h3>
                    <p className='text-sm'> hrs</p>
                </div>
                <div>:</div>
                <div className='text-center p-2 rounded-md bg-blue-300  text-white font-bold mb-2'>
                    <h3 className='text-xl'>0</h3>
                    <p className='text-sm'> Min</p>
                </div>
                <div>:</div>
                <div className='text-center p-2 rounded-md bg-blue-300 text-white font-bold mb-2'>
                    <h3 className='text-xl'>45</h3>
                    <p className='text-sm'>Sec</p>
                </div>
            </div>
        </div>
    );
}

export default FlashDeal;