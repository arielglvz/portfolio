import React from 'react'
import Title from '../../../components/Title'
import './projects.scss'
import { projects } from '../../../StaticData'
import { Icon } from '@iconify/react'
const Projects = () => {
  return (
    <div className='projects container'>
      <Title title='Projects' subtitle='Things I&#x0027;ve built so far'/>
      <div className="projects__project-list">
        {projects.map((project, index) => (
          <div className="projects__project-item" key={index}>
            <img src={project.image}  alt={project.title} />
            <div className="projects__project-content">
              <div className="projects__item-content">
                <h3 className='projects___item-title'>{project.title}</h3>
                <p className='projects___item-description'>{project.description}</p>
                <div className='projects__tech-stack'>
                  <span>Tech stack: </span>
                  <span>{project.technologies.join(', ')}</span>
                </div>
                <div className="projects__item-details">
                  <span className="projects__item-link">
                    <Icon icon='mdi:link-variant' />
                    <a href={project.link}>Live Preview</a>
                  </span>
                  <span className="projects__item-link">
                    <Icon icon='mdi:github' />
                    <a href={project.link}>View Code</a>
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Projects
