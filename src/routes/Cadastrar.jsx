import React, { useState, useEffect } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';
import { MdCancel } from "react-icons/md";
import logo from '../assets/logo.jpg'
import { CadastroStyle } from '../styles/CadastroStyle';

const Cadastrar = () => {

  // Hook - useParams: 
  let { id } = useParams();

  // Hook - useState:manipula o estado da variável - cadastrar
    const [usuarios, setUsuaios] = useState({
      id,
      usuario: '',
      password: ''
    });
  
  // Hook useNavigate: redireciona para outro componente
  const navigate = useNavigate('');
  
  // Hook useEffect: efeito colateral
  useEffect(()=>{
    if(id){
      fetch(`http://localhost:5000/usuarios/${id}`)
      .then((res)=>{
        return res.json();
      })
      .then((data)=>{
        setUsuaios(data)
      });
    }
  })

  // Verifica qual método se utilizar
  let metodo = "post"
  if(id){
    metodo = 'put'
  }


  // Função handleChange
  const handleChange = (e) => {
    setUsuaios({...usuarios, [e.target.name]: e.target.value})
  }

  // Função handleSubmit
  const handleSubmit = (e) => {
    e.preventDefault()

    fetch(`http://localhost:5000/usuarios/${id ? id: ''}`,
      {
        method: metodo,
        // Cabeçalho da página
        headers: {
          'Content-Type': 'application/json'
        },
        // Corpo da página convertido para JSON
        body: JSON.stringify(usuarios) 
      }
    ).then(()=>{
      navigate('/login')
    });
  }


  return (
    <>
        <CadastroStyle>
          <section className="container">
              <div className="container-cadastro">
              <img src={logo} alt='imagem-logo'className='img-logo'/>
                <div className="cadastro">
                  <form className='cadastro-form' onSubmit={handleSubmit}>
                      <h1 className='titulo-cadastro'>Cadastro</h1>
                      <div className="w-input">
                        <input className='input-form' type="text" name="usuario" value={usuarios.usuario} onChange={handleChange} placeholder='Digite o seu usuário '/>
                      </div>
                      <div className="w-input">
                        <input className='input-form' type="password" name="password" value={usuarios.password} onChange={handleChange} placeholder='Digite a sua senha '/>
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
        </CadastroStyle>
    </>
  )
}

export default Cadastrar