import React from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import signin from '../../assets/log-in.png'
import aboutus from '../../assets/aboutus.png'
function Navbar() {
  return (
    <main className='main-nav flex'>
        <div className="nav-div flex">
            <div className="nav-grid">
                <div className='logo flex'>
                    <img src={logo} alt="" className='logo-img' />
                </div>
                <div className='search-input flex'>
                    <div className="iconsearch flex">
                        <input type="text" placeholder='Search here' className='input-sea' />
                        <i className='fa-solid fa-search'></i>

                    </div>
                </div>
                <div className='signin flex'>
                    <img src={signin} alt="" className='nav-sign' />
                    <span className="span">SignIn</span>
                </div>
                <div className='aboutus flex'>
                    <img src={aboutus} alt="" className='nav-about' />
                    <span className="span">About us</span>
                </div>
            </div>
        </div>
    </main>
  )
}

export default Navbar
