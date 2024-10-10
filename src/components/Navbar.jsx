import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar">
            <Link className="nav-link" to='/'>All</Link>
            <Link className="nav-link" to='/fullstack'>Full Stack Developer</Link>
            <Link className="nav-link" to='/datascience'>Data Science</Link>
            <Link className="nav-link" to='/cybersecurity'>Cyber Security</Link>
            <Link className="nav-link" to='/UIUXDesign'>UI UX Design</Link>
        </nav>
    );
};

export default Navbar;