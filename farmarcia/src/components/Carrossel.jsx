import React, { useState } from 'react';
import './Carrossel.css'; // Para estilos personalizados

const Carrossel = () => {
  const imagens = [
    "https://images.unsplash.com/photo-1631390573311-3bb5329df0d3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D/600x300?text=Imagem+1",
    "https://images.unsplash.com/photo-1633793566243-4fda48959d28?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D/600x300?text=Imagem+2",
    "https://images.unsplash.com/photo-1695972235476-c75a4754dc04?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D/600x300?text=Imagem+3",
    "https://images.unsplash.com/photo-1635870224272-77fcf1f3dd1f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D/600x300?text=Imagem+4",
  ];

  const [indiceAtual, setIndiceAtual] = useState(0);

  const proximaImagem = () => {
    setIndiceAtual((prevIndice) => (prevIndice + 1) % imagens.length);
  };

  const imagemAnterior = () => {
    setIndiceAtual((prevIndice) => (prevIndice - 1 + imagens.length) % imagens.length);
  };

  return (
    <div className='carrossel-container'>
        <h2 className="carrossel-titulo">Confira Nossas Marcas!</h2>
    <div className="carrossel"> 
      <button className="botao" onClick={imagemAnterior}>❮</button>
      <img src={imagens[indiceAtual]} alt={`Imagem ${indiceAtual + 1}`} className="imagem" />
      <button className="botao" onClick={proximaImagem}>❯</button>
    </div>
    </div>
  );
};

export default Carrossel;