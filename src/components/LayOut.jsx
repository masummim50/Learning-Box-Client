import React from 'react';
import Navbar from './Navbar';
import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

const LayOut = () => {
    const theme = useSelector(state=> state.theme.dark);
    return (
        <div className={`${theme &&"dark"}`}>
            <Navbar/>
            <Outlet/>
        </div>
    );
};

export default LayOut;