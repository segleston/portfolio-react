import React from 'react';
import { useParams } from 'react-router-dom';
import projects from '../../projects.json';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function ProjectDetails() {
  const { id } = useParams();

  // Remove the '#' from the id
  const projectId = id.replace('#', '');

  const project = projects.find(project => project.id == projectId);

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className='container text-center p-5'>
      <div className='row justify-content-center pt-5 m-5'>
        <div className='col-md-6 d-flex justify-content-center pt-5'>
          <Card style={{ width: '50rem', height: '600px' }} className='project-card'>
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
