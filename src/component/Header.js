import React from 'react'
import '../styles/Header.css'
function Header() {
  return (
    <header className='Header'>
        <nav className='Header-nav'>
            <h3>crowdfund</h3>
            <ul className='Header-nav_item'>
                <li>About</li>
                <li>Discover</li>
                <li>Get Started</li>
            </ul>
        </nav>
    </header>
  )
}

export default Header