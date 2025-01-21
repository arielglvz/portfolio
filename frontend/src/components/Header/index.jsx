import React from 'react'
// import { Icon } from '@iconify/react';
import './header.scss'

const Header = () => {
  return (
    <div className='header container'>
      <span className='header__year'>&copy; 2024</span>
      <div className="header__controller">
        <p>LOGIN</p>
        {/* <Icon className="hero__icon" icon="mdi:account-box-edit-outline" /> */}
      </div>
    </div>
  )
}

export default Header
