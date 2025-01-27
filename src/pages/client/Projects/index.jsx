import React from 'react'
import Title from '../../../components/Title'
import './projects.scss'
import { projects } from '../../../StaticData'
import Card from '../../../components/ui/Card'

const Projects = () => {
  return (
    <div className='projects container'>
      <Title title='Projects' subtitle='Things I&#x0027;ve built so far'/>
      <div className="projects__project-list">
        {projects.map((project, index) => (
          <Card
            key={index}
            image={project.image}
            title={project.title}
            description={project.description}
            technologies={project.technologies}
            previewLink={project.previewLink}
            githubLink={project.githubLink}
          />
        ))}
      </div>
    </div>
  )
}

export default Projects
