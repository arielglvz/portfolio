import React from 'react'
import './hero.scss'

const Hero = () => {
  const socials =  [
    {
      "label": "github",
      "link": "https://github.com/arielglvz"
    },
    {
      "label": "linkedin",
      "link": "https://www.linkedin.com/in/arielglvz/"
    },
    {
      "label": "gmail",
      "link": "arielglvz@gmail.com"
    }
  ]

  return (
    <div className='hero container'>
      <div className='hero__text'>
        <p className="hero__subheading">HAVE A PROJECT IN MIND?</p>
        <h1 className='hero__title'>LET&#x0027;S TALK</h1>
      </div>
      <div className="hero__bottom">
        <ul className="hero__socials container">
          { socials.map((social, index) => (
            <li key={index} className="hero__social">
              <a href={social.link} target="_blank" rel="noreferrer"> {social.label} </a>
            </li>
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
