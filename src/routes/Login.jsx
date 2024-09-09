import React, { useRef, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

const Login = () => {

  // Hook-useRef: Pega a referencia de um componente ou elemento do DOM
  const usuario = useRef();
  const password = useRef();

  // Hook - useState 
  const [usuarios, setUsuarios] = useState([])

  // Hook useNavigate
  const navigate = useNavigate();

  // Hook useEffect: busca dados para o Login
  useEffect(()=>{
    fetch("http://localhost:5000/ususarios")
    .then(res => {
      return res.json();
    })
    .then(res => {
      setUsuarios(res);
    })
  })

  // Validar Login
  const validade = () =>{
    for(let i = 0; i < usuarios.lenght; i++ ){
      if(usuarios[i].usuario == usuario.current.value && usuarios[i].usuario == usuario.current.value){
        return true
      }
    }
  }

  // Criando handleSubmit
  const handleSubmit = (event) =>{
    event.preventDefault();
    if(validade){
      let token = Math.random().toString(16).substring(2) + Math.random().toString(16).substring(2)

      sessionStorage.setItem("usuario", usuario.current.value);
      sessionStorage.setItem("senha", token)
      navigate('/dashboard')
    }else{
      alert("Usuario/Senha inválida!")
    }
  }

  return (
    <>
    <section className='constainer'>
      <div className="container">
        <div className="login">
          {/* Formulário Login */}
          <form action="" className="login-form">
            <span className='titulo-login'>Faça o seu Login!</span>
            {/* Input Usuário */}
            <div className="w-input">
              <input 
                type="text" 
                ref={usuario} 
                id="usuario" 
                className="input-form" 
                />
                <span placeholder="usuario"></span>
            </div>
            {/* Input Senha */}
            <div className="w-input">
              <input 
              type="password" 
              id="senha" 
              ref={password}
              className='input-form' 
              />
              <span placeholder='Senha'></span>
            </div>
            {/* BTN Login */}
            <div className="login-btn">
              <button type="submit" className="login-form-btn" onClick={handleSubmit}>Login</button>
            </div>
            {/* Utils */}
            <ul className="utils">
              <li>
                <span className='text1'>Esqueceu ua senha?</span>
              </li>
              <li>
                <span className="text1">Não tem conta?</span>
                <a href='#' className='text2'>
                  Cadastrar
                </a>
              </li>
            </ul>
          </form>
        </div>
        <img src='' alt='imagem-logo'/>
      </div>
    </section>
    </>
  )
}

export default Login