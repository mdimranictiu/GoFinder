import React from 'react';
import Home from '../Pages/Home';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router-dom';

const Root = () => {
    return (
        <>
        <Navbar></Navbar>
        <Outlet>
        </Outlet>
        </>
    );
};

export default Root;