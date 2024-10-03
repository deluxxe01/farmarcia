import React from 'react'
import './ProdutosPromo.css';


function ProdutosPromo() {
  return (
    
    <div className='Titulo-promo'>

   <p>Melhores descontos em cuidados com Bebê</p>

    <div className='Card-produto'>
      
      <div className='Card'>
        <img src="fraudaUmBebe.png" alt="Fralda de bebê MamyPoko" />
        <p>Fralda Calça Mamypoko Dia & Noite G 50 Unidades </p>
        <p className='Preco'>Preço:  R$ 109,99</p>
        <button>ADICIONAR</button>
      </div>

      <div className='Card'>
        <img src="fraudaDoisBebe.png" alt="Fralda de bebê Pampers" />
        <p>Fralda Pampers Pants Ajuste Total XG 86 Unidades</p>
        <p className='Preco'>Preço:  R$ 135,99</p>
      <button>ADICIONAR</button>
      </div>

      <div className='Card'>
        <img src="leiteBebe.png" alt="Leite em pó Aptanutri" />
        <p>Fórmula Infantil Aptanutri Premium 3 800g</p>
        <p className='Preco'>Preço:  R$ 54,99</p>
      <button>ADICIONAR</button>
      </div>

      <div className='Card'>
        <img src="lencoBebe.png" alt="Lenço Baby Bepantol" />
        <p>Bepantol Baby Lenços Umedecidos Hipoalergênicos - Kit com 192 unidades</p>
        <p className='Preco'>Preço:  R$ 60,99</p>
      <button>ADICIONAR</button>
      </div>

      <div className='Card'>
        <img src="pomadaBebe.png" alt="Fralda de bebê Pampers" />
        <p>Bepantol Baby Creme Preventivo de Assaduras Para Bebês 120g</p>
        <p className='Preco'>Preço:  R$ 64,99</p>
        <button>ADICIONAR</button>
      </div>

      <div className='Card'>
        <img src="oleoBebe.png" alt="Fralda de bebê Pampers" />
        <p>Johnson's Baby Óleo Hidratante,200ml</p>
        <p className='Preco'>Preço:  R$ 47,99</p>
        <button>ADICIONAR</button>
      </div>

    </div>
    </div>
    
  )
}

export default ProdutosPromo
