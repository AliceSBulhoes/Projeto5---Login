import React from 'react'
import { HomeStyle } from '../styles/HomeStyle'

const Home = () => {
  return (
    <>
      <HomeStyle>
        <section className="img-bg">
          <div className="content">
            <h1 className='h1-home'>Viva a vida!</h1>
            <p className='p-home'>Até que ela acabe :D</p>
          </div>
        </section>
      </HomeStyle>
    </>
  )
}

export default Home