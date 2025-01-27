import React from 'react'
import { Icon } from '@iconify/react'
import './footer.scss'
import { socials } from '../../../StaticData'

const Footer = () => {
  const SocialIcon = [
    'mdi:github',
    'mdi:linkedin',
    'mdi:email-outline'
  ]

  return (
    <div className='footer container'>
      <h4 className="footer__brand">DEV_</h4>
      <div className="footer__contact">
        <p className='footer__number'>+63 9772089843</p>
        <p className='footer__email'>arielglvz@gmail.com</p>
        <div className="footer__socials">
          {socials.map((social, index) => (
            <a key={index}  href={social.link}>
              <Icon className="icon" icon={SocialIcon[social.id]} />
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Footer
