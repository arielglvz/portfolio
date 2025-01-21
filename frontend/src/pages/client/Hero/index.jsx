import React from 'react'
import './hero.scss'
import CustomButton from '../../../components/ui/CustomButton'
import { socials } from '../../../StaticData'
const Hero = () => {

  return (
    <div className='hero container'>
      <div className='hero__text'>
        <p className="hero__subheading">HAVE A PROJECT IN MIND?</p>
        <h1 className='hero__title'>LET&#x0027;S TALK</h1>
      </div>
      <div className="hero__bottom">
        <ul className="hero__socials">
          { socials.map((social, index) => (
            <CustomButton key={index} label={social.label} link={social.link}/>
          ))}  
        </ul>
        <div className="hero__creators">
          <p className='designed-by'>Designed by <span className='bold'>The Avgxy Design Studio</span></p>
          <p className="developed-by">Developed by <span className='bold'>Galvez Ariel</span></p>
        </div>
      </div>
    </div>
  )
}

export default Hero
