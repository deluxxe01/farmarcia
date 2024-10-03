import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import ProdutosPromo from './components/ProdutosPromo'
import Carrossel from './components/Carrossel'


function App() {


  return (
    <>
    <Header />
    <Carrossel />
    <ProdutosPromo />
   
    </>
  )
}

export default App
