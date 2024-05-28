import React from 'react';
import { Link } from 'react-router-dom';
// importing data from projects.json
import projects from '../../projects.json';
// using project card function to add to this page
import ProjectCard from '../Project';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

// Function for project gallery, showing 6 cards with photos/text from projects.json
function ProjectGallery() {
   // using project.json data
   const projectList = projects.map(project => (
      <div key={project.id} className="col-xl-4 col-lg-6 col-sm-12 my-3 d-flex justify-content-center p-2">
         <ProjectCard project={project} />
      </div>
   ));

   return (
      <div className='container text-center pb-5 '>
         <div className='row'>
            <div className='col d-flex justify-content-around'>
               <h1 className='heading-font m-5'>Portfolio</h1>
            </div>
         </div>
         <div className="row justify-content-center gallery-cards">
            {projectList}
         </div>
      </div>
   );
}

export default ProjectGallery;

