import React from 'react'

function Navbar(props) {
  return (
    <nav className='container'>
      <img src={props.src} alt='logo' height='30px' width='30px' />
      <ul>
        <li href='#'>Location</li>
        <li href='#'>About</li>
        <li href='#'>Menu</li>
        <li href='#'>Contact</li>
      </ul>
      <button className='login'>Login</button>
    </nav>
  )
}

export default Navbar
