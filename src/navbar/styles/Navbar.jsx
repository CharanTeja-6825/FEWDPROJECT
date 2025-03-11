import { Link, Route, Routes } from 'react-router-dom'
import React from 'react';

const Navbar = () => {
    return (
        <div>
            <Routes>
                <Route path='/' Component={home} />
            </Routes>
        </div>
    );
}

export default Navbar;
