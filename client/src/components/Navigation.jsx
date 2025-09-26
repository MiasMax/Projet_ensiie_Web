import React from 'react';
import { Link, useLocation } from 'react-router-dom';
// import './Navigation.css';

const Navigation = () => {
  const location = useLocation();

  return (
    <nav className="navigation">
      <Link 
        to="/" 
        className={location.pathname === "/" ? "nav-link active" : "nav-link"}
      >
        🏠 Accueil
      </Link>
      <Link 
        to="/characters" 
        className={location.pathname === "/characters" ? "nav-link active" : "nav-link"}
      >
        👥 Personnages
      </Link>
      <Link 
        to="/locations" 
        className={location.pathname === "/locations" ? "nav-link active" : "nav-link"}
      >
        🗺️ Lieux
      </Link>
      <Link 
        to="/bosses" 
        className={location.pathname === "/bosses" ? "nav-link active" : "nav-link"}
      >
        ⚔️ Bosses
      </Link>
      <Link 
        to="/items" 
        className={location.pathname === "/items" ? "nav-link active" : "nav-link"}
      >
        🎒 Objets
      </Link>
    </nav>
  );
};

export default Navigation;