import React from 'react';
import { Outlet } from 'react-router-dom';

const Baute = () => {
    return (
        <div>
            <h2> Les bautes.</h2>
            <Outlet />
        </div>
    );
};

export default Baute;