import React from 'react';
import { useParams } from 'react-router-dom';
import projects from '../../projects.json';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
// function for project details page - using the data from clicked card
function ProjectDetails() {
  const { id } = useParams();

  // Remove the '#' from the id
  const projectId = id.replace('#', '');

  const project = projects.find(project => project.id == projectId);

  if (!project) {
    // show this error if no project found
    return <div>Project not found</div>;
  }

  return (
    <div className='container text-center'>
               <div className='row'>
            <div className='col d-flex justify-content-around'>
               <h1 className='heading-font m-5'>Project Details</h1>
            </div>
         </div>
      <div className='row justify-content-center'>
        <div className=' d-flex justify-content-center card-details'>
          {/* card with styling for project details page */}
          <Card style={{ width: '60rem', height: '800px' }} className='details-card'>
            <Card.Img variant="top" src={project.image} className='py-4'/>
            <Card.Body>
              <Card.Title className='py-3'>{project.title}</Card.Title>
              <Card.Text className='py-3'>
                {project.description}
              </Card.Text>
              <a href={project.deployed}><Button variant="primary" className='m-1 card-button'>Deployed Site</Button></a>
              <a href={project.github}><Button variant="primary" className='card-button'>Github Repo</Button></a>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default ProjectDetails;
