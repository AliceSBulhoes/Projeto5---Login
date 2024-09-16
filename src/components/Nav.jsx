import React from 'react'
import { Link } from 'react-router-dom'
// Importando estilo
import { NavStyle } from '../styles/NavSyle'

const Nav = () => {
  return (
    <>
    <NavStyle>
        <header className='nav'>
            <Link to='/' className='nav-link'>Home</Link>
            <Link to='/login' className='nav-link'>Login</Link>
            <Link to='/cadastro' className='nav-link'>Cadastro</Link>
        </header>
    </NavStyle>
    </>
  )
}

export default Nav