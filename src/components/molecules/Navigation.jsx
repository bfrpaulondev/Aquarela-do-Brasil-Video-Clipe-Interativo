// src/components/Navigation.js
import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/services">Serviços</Link></li>
        <li><Link to="/projects-and-works">Projetos e Obras</Link></li>
        <li><Link to="/about-us">Sobre Nós</Link></li>
        <li><Link to="/contact">Contato</Link></li>
      </ul>
    </nav>
  );
}

export default Navigation;
