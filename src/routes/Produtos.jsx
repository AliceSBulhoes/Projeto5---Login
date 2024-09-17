import React from 'react'
// Importando imagens
import prancha1 from '../assets/prancha1.png'
import prancha2 from '../assets/prancha2.png'
import prancha3 from '../assets/prancha3.png'
import prancha4 from '../assets/prancha4.png'
import prancha5 from '../assets/prancha5.png'


const Produtos = () => {
  return (
    <>
    <div className="produto-container">
        <div className='card-produto'>
            <img src={prancha1} alt="prancha1" className="img-produto" />
            <div className="container-text">
                <h1 className="produto-title">Pranhca 1</h1>
                <p className="produto-preco">R$ 499,99</p>
            </div>
        </div>
        <div className='card-produto'>
            <img src={prancha2} alt="prancha2" className="img-produto" />
            <div className="container-text">
                <h1 className="produto-title">Pranhca 2</h1>
                <p className="produto-preco">R$ 499,99</p>
            </div>
        </div>
        <div className='card-produto'>
            <img src={prancha3} alt="prancha3" className="img-produto" />
            <div className="container-text">
                <h1 className="produto-title">Pranhca 3</h1>
                <p className="produto-preco">R$ 499,99</p>
            </div>
        </div>
        <div className='card-produto'>
            <img src={prancha4} alt="prancha4" className="img-produto" />
            <div className="container-text">
                <h1 className="produto-title">Pranhca 4</h1>
                <p className="produto-preco">R$ 499,99</p>
            </div>
        </div>
        <div className='card-produto'>
            <img src={prancha5} alt="prancha5" className="img-produto" />
            <div className="container-text">
                <h1 className="produto-title">Pranhca 5</h1>
                <p className="produto-preco">R$ 499,99</p>
            </div>
        </div>
    </div>
    </>
  )
}

export default Produtos