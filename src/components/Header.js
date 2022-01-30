import React, { useState } from 'react';
import NavBar from './NavBar';

function Header({ currentPage, handlePageChange }) {

    return (
        <header>
            <h1>Zachary Elliott</h1>
            <NavBar currentPage={currentPage} handlePageChange={handlePageChange}/>
        </header>
    )
}

export default Header;