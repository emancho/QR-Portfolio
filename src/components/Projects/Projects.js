import uniqid from 'uniqid'
import { projects } from '../../portfolio'
import ProjectContainer from '../ProjectContainer/ProjectContainer'
import FlipCard from '../FlipCard'
import './Projects.css'

const Projects = () => {
  if (!projects.length) return null

  return (
    <section id='projects' className='section projects'>
      <h2 className='section__title'>WORK EXPERIENCE</h2>

      <div className='projects__grid'>
        {projects.map((project) => (
          <FlipCard
            key={uniqid()}
            front={
              <div className="image-container">
                <img src={project.img} alt={project.alt}/>
              </div>
            }
          back={
            <ProjectContainer key={uniqid()} project={project} />
          }
         />
        ))}
      </div>
    </section>
  )
}

export default Projects
