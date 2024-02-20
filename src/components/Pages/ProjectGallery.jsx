import React from 'react';
import { Link } from 'react-router-dom';
import projects from '../../projects.json';
import ProjectCard from '../Project';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function ProjectGallery() {
   const projectList = projects.map(project => (
      <div key={project.id} className="col-md-4 my-5 d-flex justify-content-center p-2">
         <ProjectCard project={project} />
      </div>
   ));

   return (
      <div className='container text-center pb-5'>
         <div className='row'>
            <div className='col d-flex justify-content-around'>
               <h1 className='heading-font m-5'>Portfolio Gallery</h1>
            </div>
         </div>
         <div className="row justify-content-center">
            {projectList}
         </div>
      </div>
   );
}

export default ProjectGallery;

