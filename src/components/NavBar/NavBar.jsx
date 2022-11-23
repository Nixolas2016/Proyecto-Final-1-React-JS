import React from 'react';
import CartWidget from '../CartWidget/CartWidget';
import navbar from './styles/navbar.scss'

const NavBar = () => {
  const menu = [
    {id: 1, categories: "Ir a Inicio"},
    {id: 2, categories: "Buscar por Genero"},
    {id: 3, categories: "Contactenos"},
  ];

  return ( 
  <div>
    <nav>
      <h1>Nixo Movies</h1>
      {menu.map((nav, index) => {
        return (
          <a href="#" key={index}>
            {nav.categories}
          </a>
        );
      })}
    </nav>

        <CartWidget/>
  </div>
  );
}

export default NavBar;