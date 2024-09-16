import React from 'react'
import { IoIosLogOut } from "react-icons/io";
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {

  const navigate = useNavigate('')

  const handleLogOut = () => {
    sessionStorage.removeItem('usuario')
    sessionStorage.removeItem('senha')
    alert('Saindo . . .')
    navigate('/')
  }
  return (
    <>
    <section className="container">
      <button onClick={handleLogOut}>
        <IoIosLogOut />
      </button>
    </section>
    </>
  )
}

export default Dashboard