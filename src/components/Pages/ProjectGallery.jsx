import React from 'react';
import { Link } from 'react-router-dom';
import projects from '../../projects.json';
import ProjectCard from '../Project';

function ProjectGallery() {
   const projectList = projects.map(project => (
      <Link key={project.id} to={`/project/${project.id}`}>
         <ProjectCard project={project} />
      </Link>
   ));

   return (
      <div>
         <h1>Porfolio Gallery</h1>
         <div className='row'>
            {projectList}
         </div>
      </div>
   );
}

export default ProjectGallery;
