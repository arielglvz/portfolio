import React from 'react'
import './custom-btn.scss'

const CustomButton = ({ label = 'label here' }) => {
  return (
    <div className='custom-btn'>
      <p className='custom-btn--border'>{label}</p>
    </div>
  )
}

export default CustomButton
