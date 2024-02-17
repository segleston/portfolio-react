import Project from '../Project';
import projects from '../../projects.json'

const ProjectGallery = () => {
   return (
      <>
         <h1>Project Gallery</h1>
         (projects.map(project = (
         <Project key={project.id} project={project} />

         )))
      </>
   )
}

export default ProjectGallery;