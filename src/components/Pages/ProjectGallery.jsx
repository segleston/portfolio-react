import React from 'react';
import { Link } from 'react-router-dom';
import projects from '../../projects.json';
import ProjectCard from '../Project';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';



function ProjectGallery() {
   const projectList = projects.map(project => (
      <div key={project.id} className="col-md-4 mb-5">
         <Link to={`/project/${project.id}`}>
            <ProjectCard project={project} />
         </Link>
      </div>
   ));

   return (
      <div className='container'>
         <h1 className='heading-font p-5 m-5 text-center'>Portfolio Gallery</h1>
         <div className="row">
            {projectList}
         </div>
      </div>
   );
}


export default ProjectGallery;
