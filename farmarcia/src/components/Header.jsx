import React from 'react'
import './Header.css'
function Header() {
  return (
    <body>
       <center>
     <div className='NavBar-Logo'>
        <img src="farmarcia-logo-completa.png" alt="Logo da Empresa" width="300" height="150"/>
    </div> 
       <nav>
    <div className='palavras'></div>
    <ul>
        <li><a href=''>HOME</a></li>
        <li><a href=''>PRODUTOS</a></li>
        <li><a href=''>PROMOÇÕES</a></li>
        <li><a href=''>CARRINHO</a></li>
        <li><a href=''>CONTATO</a></li> 
    </ul>

    {/* <div className='NavBar-Procurar'>
        <input type="text" placeholder='Buscar...'/>
       
    </div>
    <a href="Carrinho.jsx"><img src='carrinho-compras.png' alt="Carrinho" width="50" height="30"></img></a> */}
       </nav>
       </center>
    </body>
  )
}

export default Header
