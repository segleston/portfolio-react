import React from 'react';
import { useParams } from 'react-router-dom';
import projects from '../../projects.json';

function ProjectDetails() {
  const { id } = useParams();
  console.log('ID:', id);

  const project = projects.find(project => project.id == id);
  console.log('Project:', project);

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <>
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
    </>
  );
}

export default ProjectDetails;
