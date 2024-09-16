import React, { useState, useEffect } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';
import { MdCancel } from "react-icons/md";
import logo from '../assets/logo.jpg'

const Cadastrar = () => {
    const [usuarios, setUsuaios] = useState('');


  return (
    <>
        <section className="container">
            <div className="container-cadastro">
            <img src={logo} alt='imagem-logo'className='img-logo'/>
              <div className="cadastro">
                <form className='cadastro-form'>
                    <h1 className='titulo-cadastro'>Cadastro</h1>
                    <div className="w-input">
                      <input type="text" name="usuario" value={usuarios.usuario} onChange={handleChange} placeholder='Digite o seu usuário '/>
                    </div>
                    <div className="w-input">
                      <input type="password" name="senha" value={usuarios.senha} onChange={handleChange} placeholder='Digite a sua senha '/>
                    </div>
                    <div className="cadastro-btn">
                      <button type='submit' className="cadastro-form-btn">Cadastrar</button>
                    </div>
                    <Link to="/listar-usuario">
                      <MdCancel />
                    </Link>
                </form>
              </div>
            </div>
        </section>
    </>
  )
}

export default Cadastrar