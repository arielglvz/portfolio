import React from 'react'
import './title.scss'

const Title = ({ title, subtitle}) => {
  return (
    <div className='content-title'>
      <h2 className='content-title__title'>{title}</h2>
      <p className='content-title__subtitle'>{subtitle}</p>
    </div>
  )
}

export default Title
