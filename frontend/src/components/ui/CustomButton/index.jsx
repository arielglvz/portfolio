import React from 'react'
import './custom-btn.scss'

const CustomButton = ({ label = 'label here', link }) => {
  return (
    <div className='custom-btn'>
      <a href={link} target='_blank' rel='noreferrer'>
        <p className='custom-btn--border'>{label}</p>
      </a>
    </div>
  )
}

export default CustomButton;