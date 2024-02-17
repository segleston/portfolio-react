import Project from '../Project';
import projects from '../../projects.json'

const ProjectGallery = () => {

  return (
    <>
      <h1>These are my projects!</h1>

      {projects.map(project => (
        <Project key={project.id} project={project} />
      ))}
    </>
  )
}

export default ProjectGallery;