import React from 'react'
import Title from '../../../components/Title'
import { techStack } from '../../../StaticData'
import { Icon } from '@iconify/react';
import './technology.scss'

const Technology = () => {
  return (
    <div className='technology container'>
      <Title 
        title='My Tech Stack'
        subtitle='Technologies I&#x0027;ve been working with recently'
      />
      <div className="technology__tech-list">
        {techStack.map((tech, index) => (
          <div className="technology__tech-item" key={index}>
            <img src={tech.icon} alt="" />
            {/* <p>{tech.name}</p> */}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Technology
