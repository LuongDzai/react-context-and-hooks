import React, { useContext } from 'react';
import { BookContext } from '../contexts/BookContext';

const Navbar = () => {
    const { books } = useContext(BookContext)
    return (
        <div className="navbar">
            <h1>Ninja Reading</h1>
            <p>Curently you have {books.length} books yeah!!</p>
        </div>
    );
}

export default Navbar;