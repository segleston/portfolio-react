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
    <div className='container text-center'>
      <div className='row justify-content-center'>
        <div className='col-md-6'>
          <Card style={{ width: '25rem', height: '500px' }} className='project-card'>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>{project.title}</Card.Title>
              <Card.Text>
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
