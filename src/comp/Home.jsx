import React from 'react'
import './home.css'
import Logo from './images/bird-colorful-logo-gradient-vector_343694-1365-modified.png'
import { CgHello } from "react-icons/cg";
import { GrProjects } from "react-icons/gr";
import { FaStar } from "react-icons/fa";
import { VscMenu } from "react-icons/vsc";


const Home = () => {

  const go = () => {
    window.location.href = '/about'
  }

  return (
    <>
      <div className="container">
        <div className='home' onClick={go}>
          <CgHello className='icons'/>
          <h2 >
            Welcome To My Site
          </h2>
        </div>
        <div className='home' onClick={go}>
        <GrProjects className='icons'/>
          <h2 >
            See My Projects
          </h2>
        </div>
        <div className='home' onClick={go}>
        <FaStar className='icons'/>
          <h2 >
            Rate Me Please
          </h2>
        </div>
        <div className='home' onClick={go}>
        <VscMenu className='icons'/>
          <h2 >
            More...
          </h2>
        </div>
        <img className='imgs' src={Logo} alt="logo" />
      </div>
    </>
  )
}

export default Home