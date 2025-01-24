import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import './hero.scss'
import CustomButton from '../../../components/ui/CustomButton'

const Hero = () => {
  const { portfolioData } = useSelector((state) => state.root);
  
  if(!portfolioData) {
    return <p>loading...</p>
  }
  const { firstName, lastName, welcomeText, caption, yearCreated, socials } = portfolioData[0].content.hero;
  
  return (
    <div className='hero container'>
      <div className='hero__text'>
        <p className="hero__subheading">{welcomeText}</p>
        <h1 className='hero__title'>{caption}</h1>
      </div>
      <div className="hero__bottom">
        <ul className="hero__socials">
          { socials.map((social, index) => (
            <CustomButton key={index} label={social.label} link={social.link}/>
          ))}  
        </ul>
        <div className="hero__creators">
          <p className='designed-by'>Designed by <span className='bold'>The Avgxy Design Studio</span></p>
          <p className="developed-by">Developed by <span className='bold'>{`${lastName} ${firstName}`}</span></p>
        </div>
      </div>
    </div>
  )
}

export default Hero
