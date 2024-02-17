import React from 'react';
import { useParams } from 'react-router-dom';
import projects from '../../projects.json';

function ProjectDetails() {
  const { id } = useParams();
  console.log('ID:', id); 

  const project = projects.find(project => project.id === id);
  console.log('Project:', project); 

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <>
    <div>
      <h2>{project.title}</h2>
      <p>{project.description}</p>
      <a href={project.deployed}>Deployed site</a>
      <a href={project.github}>Github Repo</a>
    </div>
    </>
  );
}

export default ProjectDetails;
