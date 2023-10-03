import React from 'react';
import Button from './Button';

function SearchInput() {
    return (
        <div className='block w-1/3'>
            <div className='w-full flex items-center max-sm:flex-col p-0.5 gap-4 sm:border sm:border-yellow-300 rounded-full'>
                <input type='text' className='input'  placeholder='Write the thing you want to look...'/>
                <div className='flex max-sm:justify-end items-center max-sm:w-full'>
                    <Button label='Search'/>
                </div>
            </div>
        </div>
    );
}

export default SearchInput;