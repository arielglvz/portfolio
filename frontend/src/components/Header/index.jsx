import React from 'react'
import './header.scss'
import { useNavigate } from 'react-router-dom'

const Header = ({ left, right }) => {
  const navigate = useNavigate();
  const currNav = window.location.href.includes('/admin')
  
  const handleNavigation = () => {
    navigate(currNav ? '/' : '/login')
  }

  return (
    <div className='header container'>
      <span className='header__left'>{left}</span>
      <span className="header__right" onClick={handleNavigation}>{right}</span>
    </div>
  )
}

export default Header
