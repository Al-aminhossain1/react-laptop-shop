import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav>
            <ul className='text-center space-x-4 text-red-400 text-xl font-bold'>
                <a href="/">Home</a>
                <Link to="/Reviews">Reviews</Link>
                <a href="/Dashboard">Dashboard</a>
                <a href="/Blogs">Blogs</a>
                <a href="/About">About</a>


            </ul>
        </nav>

    );
};

export default Header;