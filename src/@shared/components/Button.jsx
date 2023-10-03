import React from 'react';

function Button({label}) {
    return (
        <button className="flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none bg-yellow-300 text-white border-coral-red rounded-full w-full">
            {label}
        </button>
    );
}

export default Button;