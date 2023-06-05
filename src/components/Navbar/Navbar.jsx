import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav>
            <Link to="/">Accueil</Link>
            <Link to="/Projet">Projet</Link>


        </nav>
    );
};

export default Navbar;