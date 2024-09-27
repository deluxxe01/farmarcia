import React from 'react';
import './Header.css';

function Header() {
  return (
    <div>
      <center>
        <nav>
          <ul>
            <li><a href='/' >MEDICAMENTOS</a></li>
            <li><a href='/' >BEBES</a></li>
            <li><a href='/' >HIGIENE</a></li>
            <li><a href='/' >FITNESS</a></li>
            <li><a href='/' >DERMOCOSMÉTICOS</a></li> 
          </ul>
        </nav>

        <div className='NavBar-Logo'>
          <img src="farmarcia-logo-completa.png" alt="Logo da Empresa" width="300" height="150" />
        </div> 

        <input type="text" placeholder='O que você procura?' />

      </center>
    </div>
  );
}

export default Header;
