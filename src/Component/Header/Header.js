import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav>
            <ul className=' md:flex text-center space-x-4 text-red-400 text-xl font-bold'>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/Reviews">Reviews</Link></li>
                <li><Link to="/Dashboard">Dashboard</Link></li>
                <li> <Link to="/Blogs">Blogs</Link></li>
                <li><Link to="/About">About</Link></li>


            </ul>
        </nav>

    );
};

export default Header;