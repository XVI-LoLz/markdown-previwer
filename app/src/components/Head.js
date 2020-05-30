import React from 'react'
import logo from '../utils/logo.png'

export default function Head({ title, color }){
  return(
    <nav className={`nav ${color}`} >
      <img src={logo} alt='App logo' className='icon' />
      <div className='title'>
        {title}
      </div>
      <div className='max-btn'>
        🔳
      </div>
    </nav>
  )
}