import React,{useState} from 'react'
import '../styles/Header.css'
function Header({toggle,setToggle}) {
  return (
    <header className='Header'>
        <nav className='Header-nav'>
            <h3>crowdfund</h3>
            <div className='harmburger' onClick={(e)=> setToggle(!toggle)}>
               <span></span>
               <span></span>
               <span></span>
            </div>
            <ul className='Header-nav_item'>
                <li>About</li>
                <li>Discover</li>
                <li>Get Started</li>
            </ul>
           
        </nav>
        <ul className={ toggle ? 'Header-nav_item-sm' : 'Header-nav_item-sm hide-nav'}>
                <li onClick={(e)=> setToggle(!toggle)} href="#about">About</li>
                <li onClick={(e)=> setToggle(!toggle)} href="#about">Discover</li>
                <li onClick={(e)=> setToggle(!toggle)} href="#about">Get Started</li>
            </ul>
    </header>
  )
}

export default Header